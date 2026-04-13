import express from "express";
import axios from "axios";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import verifyAdmin from "../middleware/AdminVerify.js";
import jwt from "jsonwebtoken"; // ✅
const router = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Sadece resim dosyaları kabul edilir"));
    }
  },
});

const uploadToCloudinary = async (buffer, folder) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const base64 = buffer.toString("base64");
  const dataUri = `data:image/jpeg;base64,${base64}`;
  const result = await cloudinary.uploader.upload(dataUri, {
    folder: folder || "products",
  });
  return result;
};

// upload
router.post(
  "/upload",
  verifyAdmin,
  upload.single("file"), // ✅ "file" not "files"
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "Resim gönderilmedi" });
      }

      const result = await uploadToCloudinary(req.file.buffer, "products");
      res.json({
        url: result.secure_url,
        public_id: result.public_id,
      });
    } catch (err) {
      console.log("❌ UPLOAD ERROR:", err.message);
      res.status(500).json({ error: err.message });
    }
  },
);

//  products
router.post("/products", verifyAdmin, async (req, res) => {
  const STRAPI_URL = process.env.STRAPI_URL;
  const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

  try {
    const {
      name,
      productCode,
      imageUrl,
      imagePublicId,
      isNew,
      categories,
      price,
      cost,
    } = req.body.data;

    if (!name) return res.status(400).json({ error: "Ürün adı zorunludur" });
    if (!productCode)
      return res.status(400).json({ error: "Ürün kodu zorunludur" });
    if (!imageUrl)
      return res.status(400).json({ error: "Ürün resmi zorunludur" });

    const response = await axios.post(
      `${STRAPI_URL}/api/products`,
      {
        data: {
          name,
          productCode,
          imageUrl,
          imagePublicId,
          isNew,
          category: categories ? { connect: [{ id: categories }] } : null,
          price,
          cost,
        },
      },
      {
        headers: { Authorization: `Bearer ${STRAPI_API_TOKEN}` },
      },
    );

    res.json(response.data);
  } catch (err) {
    console.log("❌ PRODUCTS ERROR:", err.response?.data || err.message);
    const publicId = req.body?.data?.imagePublicId; // ✅ من data
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }
    res.status(500).json({ error: err.response?.data || err.message });
  }
});
// products Edit
router.put("/products/:documentId", verifyAdmin, async (req, res) => {
  try {
    const { documentId } = req.params;
    const {
      name,
      productCode,
      price,
      cost,
      imageUrl,
      imagePublicId,
      categories,
    } = req.body.data;

    const response = await axios.put(
      `${process.env.STRAPI_URL}/api/products/${documentId}`,
      {
        data: {
          name,
          productCode,
          price,
          cost,
          imageUrl,
          imagePublicId,
          category: categories ? { connect: [{ id: categories }] } : null,
        },
      },
      { headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` } },
    );
    res.json(response.data);
  } catch (err) {
    console.log(err.response?.data);
    res.status(500).json({ error: err.response?.data || err.message });
  }
});
// register
router.post("/auth/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const strapiRes = await axios.post(
      `${process.env.STRAPI_URL}/api/auth/local/register`,
      { email, username, password },
    );
    res.json(strapiRes.data);
  } catch (error) {
    console.log(error.response?.data);
    res.status(400).json(error.response?.data);
  }
});

// login
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const strapiRes = await axios.post(
      `${process.env.STRAPI_URL}/api/auth/local`,
      { identifier: email, password },
    );
    res.json(strapiRes.data);
  } catch (err) {
    console.log(err.response?.data);
    res.status(400).json(err.response?.data);
  }
});
router.post("/login", async (req, res) => {
  try {
    console.log("body:", req.body);
    console.log("STRAPI URL:", process.env.STRAPI_URL);

    const strapiRes = await axios.post(
      `${process.env.STRAPI_URL}/admin/login`,
      req.body,
    );

    console.log("strapi response:", strapiRes.data);

    if (!strapiRes.data?.data?.token) {
      return res.status(401).json({ error: "E-posta veya şifre hatalı" });
    }

    const ourToken = jwt.sign(
      { email: req.body.email },
      process.env.JWT_SECRET,
      { expiresIn: "365d" },
    );
    res.json({ token: ourToken });
  } catch (err) {
    console.log("strapi error:", err.response?.data); // ✅
    res.status(401).json({ error: "E-posta veya şifre hatalı" });
  }
});
export default router;

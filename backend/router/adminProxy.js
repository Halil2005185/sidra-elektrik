import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/auth/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const strapiRes = await axios.post(
      `${process.env.STRAPI_URL}/api/auth/local/register`,
      { email, username, password },
    );
    res.json(strapiRes.data);
  } catch (error) {
    console.log(error.response.data);
    res.status(400).json(error.response?.data);
  }
});
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email + password);

    const strapiRes = await axios.post(
      `${process.env.STRAPI_URL}/api/auth/local`,
      { identifier: email, password },
    );
    res.json(strapiRes.data);
  } catch (err) {
    console.log(err.response.data);
    res.status(400).json(err.response?.data);
  }
});

export default router;

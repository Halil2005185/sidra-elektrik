import jwt from "jsonwebtoken";

function verifyAdmin(req, res, next) {
  const authHead = req.headers["authorization"];
  const token = authHead && authHead.split(" ")[1];
  // في verifyAdmin middleware
  console.log("token:", req.headers.authorization);
  if (!token) {
    return res.status(401).json({ error: "Token bulunamadı" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({ error: "Geçersiz token" });
  }
}

export default verifyAdmin;

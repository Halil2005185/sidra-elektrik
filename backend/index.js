import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import adminProx from "./router/adminProxy.js";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/admin", adminProx);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

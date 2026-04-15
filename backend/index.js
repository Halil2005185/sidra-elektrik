import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import adminProx from "./router/adminProxy.js";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
const app = express();

app.use(express.json());
app.use(helmet());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.FRONTEND_URL,
    ],
    credentials: true,
  }),
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);
app.use("/api/admin", adminProx);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

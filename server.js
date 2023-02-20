import "dotenv/config";
import express from "express";

const app = express();

import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// router
app.get("/", (req, res) => {
  res.json({
    message: "You have reached admin API",
  });
});

// global error handling
app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    status: "error",
    message: err.message,
  });
});

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Your server is running on PORT:${PORT}`);
});

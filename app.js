import express from "express";
import cors from "cors";
import AppError from "./utils/appError.js";
import globalErrorHandler from "./controllers/errorController.js";
import shorteningRouter from "./routes/shorteningRoute.js";

const app = express();

app.use(express.json());

app.use(cors());
app.options("*", cors());

app.use("/myAPI/v1/url_shortner", shorteningRouter);

app.all("*", (req, res, next) => {
  return next(
    new AppError(`${req.originalUrl} could not found in this server`, 404)
  );
});

app.use(globalErrorHandler);

export default app;

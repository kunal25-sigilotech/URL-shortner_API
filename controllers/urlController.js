import URLModel from "../model/urlModel.js";
import AppError from "../utils/appError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const short = catchAsync(async (req, res) => {
  const newURL = await URLModel.create({ originalURL: req.body.originalURL });
  res.status(201).json({
    status: "success",
    url: newURL,
  });
});

export const getURL = catchAsync(async (req, res, next) => {
  const foundURL = await URLModel.findOne({ shortURL: req.params.url });

  if (!foundURL)
    return next(new AppError("failed to find the request URL", 404));

  foundURL.clicks++;
  foundURL.save();

  res.status(200).json({
    status: "success",
    url: foundURL.originalURL,
  });
});

import { catchAsync } from "../utils/catchAsync.js";
import { nanoid } from "nanoid";
import { validateURL } from "../utils/validateURL.js";

export const short = catchAsync(async (req, res, next) => {
  const { originalURL } = req.body;
  const urlId = nanoid();
});

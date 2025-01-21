import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: [true, "urlId is required"],
  },

  originalURL: {
    type: String,
    required: [true, "Original url is required"],
  },

  shortURL: {
    type: String,
    required: [true, "shortURL is required"],
  },

  clicks: {
    type: Number,
    required: [true, "Click is required"],
    default: 0,
  },

  date: {
    type: String,
    default: Date.now(),
  },
});

const URLModel = mongoose.model("url", urlSchema);
export default URLModel;

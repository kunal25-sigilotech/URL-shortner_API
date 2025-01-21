import mongoose from "mongoose";
import shortid from "shortid";

const urlSchema = new mongoose.Schema({
  originalURL: {
    type: String,
    required: [true, "Original url is required"],
  },

  shortURL: {
    type: String,
    required: [true, "shortURL is required"],
    default: shortid.generate,
  },

  clicks: {
    type: Number,
    required: [true, "Click is required"],
    default: 0,
  },
});

const URLModel = mongoose.model("ShortURL", urlSchema);
export default URLModel;

import { Router } from "express";
import { short, getURL } from "../controllers/urlController.js";

const router = Router();
router.post("/shorten", short);
router.route("/:url").get(getURL);

export default router;

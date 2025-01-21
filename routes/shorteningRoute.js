import { Router } from "express";
import { short } from "../controllers/urlController.js";

const router = Router();
router.route("/").post(short);

export default router;

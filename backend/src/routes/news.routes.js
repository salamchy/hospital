import express from "express";
import upload from "../utils/multer.js";
import {
  getAllNews,
  getNewsById,
  createNews,
  likeNews,
} from "../controllers/news.controllers.js";

const router = express.Router();

router.get("/all", getAllNews);
router.get("/:id", getNewsById);
router.post("/create", upload.single("image"), createNews);
router.put("/:id/like", likeNews);

export default router;

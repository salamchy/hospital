import express from "express";
import multer from "multer";
import {
  addService,
  getAllServices,
  getServiceById,
  deleteService,
} from "../controllers/service.controllers.js";

const router = express.Router();
const upload = multer();

router.post("/add", upload.single("image"), addService);
router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.delete("/:id", deleteService);

export default router;

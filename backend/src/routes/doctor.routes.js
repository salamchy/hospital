import express from "express";
import upload from "../utils/multer.js";
import {
  getAllDoctors,
  deleteDoctor,
  addDoctor,
} from "../controllers/doctor.controllers.js";

const router = express.Router();

router.post("/create", upload.single("image"), addDoctor);
router.get("/all", getAllDoctors);
router.delete("/:id", deleteDoctor);

export default router;

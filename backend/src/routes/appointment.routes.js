import express from "express";
import {
  createAppointment,
  getAppointments,
} from "../controllers/appointment.controllers.js";

const router = express.Router();

router.post("/create", createAppointment);
router.get("/all", getAppointments);

export default router;

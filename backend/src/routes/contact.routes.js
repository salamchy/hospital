import express from "express";
import {
  ContactForm,
  getMessages,
} from "../controllers/contact.controllers.js";
import { validateContactForm } from "../middleware/contactMiddleware.js";

const router = express.Router();

router.post("/create", validateContactForm, ContactForm);
router.get("/messages", getMessages);

export default router;

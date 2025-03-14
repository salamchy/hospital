import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// Create an instance of an Express application
const app = express();

// Enable CORS with specific options
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Parse incoming JSON requests with a body size limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Parse incoming URL-encoded data with a body size limit of 16kb
// - extended: true allows for rich objects and arrays to be encoded into the URL-encoded format
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse cookies from incoming requests and populate req.cookies
app.use(cookieParser());

//import routes
import AdminRouter from "./routes/user.routes.js";
import AppointmentRouter from "./routes/appointment.routes.js";
import ContactRouter from "./routes/contact.routes.js";
import DoctorRouter from "./routes/doctor.routes.js";
import NewsRouter from "./routes/news.routes.js";
import ServiceRouter from "./routes/service.routes.js";

//routes declaration
app.use("/api/admin", AdminRouter);
app.use("/api/appointment", AppointmentRouter);
app.use("/api/contact", ContactRouter);
app.use("/api/doctors", DoctorRouter);
app.use("/api/news", NewsRouter);
app.use("/api/service", ServiceRouter);

export { app };

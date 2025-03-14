import Appointment from "../models/appointment.models.js";

export const createAppointment = async (req, res) => {
  try {
    // Validate required fields
    const {
      name,
      email,
      phone,
      gender,
      date,
      time,
      doctor,
      department,
      message,
    } = req.body;
    if (
      !name ||
      !email ||
      !phone ||
      !gender ||
      !date ||
      !time ||
      !doctor ||
      !department ||
      !message
    ) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const appointment = new Appointment(req.body);

    await appointment.save();

    res
      .status(201)
      .json({ message: "Appointment created successfully", appointment });
  } catch (error) {
    console.error("Error saving appointment:", error); // Log error details
    res.status(500).json({ error: "Failed to create appointment." });
  }
};

// Get Appointments (Admin Only)
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

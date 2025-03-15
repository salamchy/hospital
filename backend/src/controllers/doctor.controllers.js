import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";
import Doctor from "../models/doctor.model.js";

//add doctor
export const addDoctor = async (req, res) => {
  try {
    const { name, specialist } = req.body;

    if (!name || !specialist) {
      return res.status(422).json({
        success: false,
        message: "All fields are required",
      });
    }

    let imageUrl = null;

    // Check if an image file is provided
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "doctors" },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
      });

      imageUrl = result.secure_url;
    }

    const newDoctor = new Doctor({
      name,
      specialist,
      image: imageUrl,
    });

    await newDoctor.save();

    res.status(201).json({
      success: true,
      data: newDoctor,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

//doctor list
export const getAllDoctors = async (req, res) => {
  try {
    const allDoctors = await Doctor.find().sort({ createdAt: -1 });
    res.status(200).json(allDoctors);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteDoctor = async (req, res) => {
  try {
    const { id } = req.params;

    const doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ error: "Doctor not found" });
    }

    // Extract the Cloudinary public ID from the image URL
    const imageUrl = doctor.image;
    if (imageUrl) {
      const publicId = imageUrl.split("/").pop().split(".")[0];

      await cloudinary.uploader.destroy(`doctors/${publicId}`);
    }

    await Doctor.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Doctor deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting doctor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

import Service from "../models/service.models.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

// Add a new service
export const addService = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
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
          { folder: "services" },
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

    const newService = new Service({
      title,
      description,
      image: imageUrl,
    });

    await newService.save();

    res.status(201).json({
      success: true,
      data: newService,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Get  services list
export const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Get a single service by ID
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// Delete a service
export const deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // Delete image from Cloudinary if it exists
    if (service.image) {
      const imageId = service.image.split("/").pop().split(".")[0]; // Extract Cloudinary public_id
      await cloudinary.uploader.destroy(`services/${imageId}`);
    }

    await Service.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

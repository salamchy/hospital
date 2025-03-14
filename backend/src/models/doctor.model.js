import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    image: {
      type: String, // Store Cloudinary image URL
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);

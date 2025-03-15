import News from "../models/news.models.js";
import cloudinary from "../utils/cloudinary.js";
import streamifier from "streamifier";

// Get  news list
export const getAllNews = async (req, res) => {
  try {
    const newsList = await News.find().sort({ date: -1 });
    res.json(newsList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

// Get single news
export const getNewsById = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });

    news.views += 1;
    await news.save();

    res.json(news);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

// Create news
export const createNews = async (req, res) => {
  try {
    const { title, content, authorName } = req.body;

    if (!title || !content || !req.file || !authorName) {
      return res.status(422).json({ error: "All fields are required" });
    }

    let imageUrl = null;

    // Check if an image file is provided
    if (req.file) {
      const result = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "news" },
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

    const newNews = new News({
      title,
      content,
      image: imageUrl,
      author: { name: authorName },
    });

    await newNews.save();
    res.status(201).json({ success: true, data: newNews });
  } catch (error) {
    res.status(500).json({ error: "Failed to create news" });
  }
};

// ✅ Like news
export const likeNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });

    news.likes += 1;
    await news.save();

    res.json({ success: true, likes: news.likes });
  } catch (error) {
    res.status(500).json({ error: "Failed to like news" });
  }
};

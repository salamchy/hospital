import { useState } from "react";
import { useCreateNewsMutation } from "../../features/api/newsApi";
import { toast } from "react-hot-toast";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");

  const [createNews, { isLoading }] = useCreateNewsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !image || !authorName) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("authorName", authorName);

    try {
      await createNews(formData).unwrap();
      toast.success("News created successfully!");

      // Reset fields
      setTitle("");
      setContent("");
      setImage(null);
      setAuthorName("");
    } catch (error) {
      toast.error("Failed to create news");
      console.error("Error creating news:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create News</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded"
        >
          {isLoading ? "Creating..." : "Create News"}
        </button>
      </form>
    </div>
  );
};

export default CreateNews;

import { useState } from "react";
import { useCreateNewsMutation } from "../../features/api/newsApi";
import { toast } from "react-hot-toast";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [createNews, { isLoading, error }] = useCreateNewsMutation();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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

      setTitle("");
      setContent("");
      setImage(null);
      setAuthorName("");
    } catch (error) {
      toast.error("Failed to create news");
    }
  };

  return (
    <div className="max-w-2xl mt-14 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Create News</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600">Author Name</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none "
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 cursor-pointer text-white font-semibold rounded-md transition duration-300 ease-in-out ${isLoading ? 'bg-gray-400' : 'bg-secondary hover:bg-blue-600'}`}
        >
          {isLoading ? "Creating..." : "Create News"}
        </button>
      </form>

      {error && <div className="mt-4 text-red-500 text-center">{error.message}</div>}
    </div>
  );
};

export default CreateNews;

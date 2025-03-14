import { useParams } from "react-router-dom";
import { useGetNewsByIdQuery, useLikeNewsMutation } from "../features/api/newsApi";
import { toast } from "react-hot-toast";

const NewsDetail = () => {
  const { id } = useParams();
  const { data: news, error, isLoading } = useGetNewsByIdQuery(id);
  const [likeNews] = useLikeNewsMutation();

  const handleLike = async () => {
    try {
      await likeNews(id);
      toast.success("You liked this news!");
    } catch (error) {
      toast.error("Failed to like news");
    }
  };

  if (isLoading) return <p className="text-center text-gray-600">Loading news...</p>;
  if (error) return <p className="text-center text-red-500">Error loading news.</p>;

  return (
    <div className="container mx-auto mt-36 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
        <p className="text-gray-500 mb-4">
          {new Date(news.date).toDateString()} | {news.author.name}
        </p>
        <p className="text-gray-700">{news.content}</p>
        <div className="flex items-center mt-4 text-gray-500">
          <span className="mr-3">👁 {news.views}</span>
          <span>❤️ {news.likes}</span>
        </div>
        <button onClick={handleLike} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Like ❤️
        </button>
      </div>
    </div>
  );
};

export default NewsDetail;

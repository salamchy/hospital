import Title from "./Title";
import { useGetAllNewsQuery } from "../features/api/newsApi";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const News = () => {
  const { data: news, error, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <p className="text-center text-gray-600">Loading news...</p>;
  if (error) {
    toast.error("Failed to fetch news");
    return <p className="text-center text-red-500">Error loading news.</p>;
  }

  return (
    <div className="my-8 md:my-20 mx-5 md:mx-44">
      <Title title="Better Information, Better Health" subtitle="News" />

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        {news?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {news.map((item) => (
              <Link to={`/news/${item._id}`} key={item._id} className="block">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4 hover:shadow-lg transition duration-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="text-left">
                    <p className="text-blue-600 text-sm">
                      {new Date(item.date).toDateString()} | {item.author.name}
                    </p>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                    <div className="flex items-center mt-5 text-gray-500">
                      <span className="mr-3">👁 {item.views}</span>
                      <span>❤️ {item.likes}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default News;

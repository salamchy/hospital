import { useGetAllNewsQuery } from "../../features/api/newsApi";
import { toast } from "react-hot-toast";

const NewsList = () => {
  const { data: news, error, isLoading } = useGetAllNewsQuery();

  if (isLoading) return <p className="text-center text-gray-600">Loading news...</p>;
  if (error) {
    toast.error("Failed to fetch news");
    return <p className="text-center text-red-500">Error loading news.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news?.length > 0 ? (
          news.map((item) => (
            <div key={item._id} className="border p-4 rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-700">{item.content.slice(0, 100)}...</p>
              <p className="text-sm text-gray-500">By {item.author.name}</p>
              <p className="text-sm text-gray-500">Views: {item.views} | Likes: {item.likes}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;

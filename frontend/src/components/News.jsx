import Title from "./Title"
import NewsImg from "../assets/news.png";

const articles = [
  {
    id: 1,
    date: "Monday 05, September 2021",
    author: "By Author",
    title: "This Article’s Title goes Here, but not too long.",
    views: 68,
    likes: 86,
    image: NewsImg,
  },
  {
    id: 2,
    date: "Tuesday 06, September 2021",
    author: "By Author",
    title: "Another article title here, short and catchy. good",
    views: 90,
    likes: 120,
    image: NewsImg,
  },
  {
    id: 3,
    date: "Wednesday 07, September 2021",
    author: "By Author",
    title: "Yet another interesting article for you to read. yes,",
    views: 110,
    likes: 200,
    image: NewsImg,
  },
  {
    id: 4,
    date: "Thursday 08, September 2021",
    author: "By Author",
    title: "Engaging content with a compelling story. now,",
    views: 150,
    likes: 300,
    image: NewsImg,
  },
];


const News = () => {
  return (
    <div className='my-8 md:my-20 mx-5 md:mx-44'>
      <Title title="better information, better health" subtitle="News" />

      <div className="max-w-6xl mx-auto mt-8 md:mt-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-start space-x-4"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="text-left">
                <p className="text-blue-600 text-sm">
                  {article.date} | {article.author}
                </p>
                <h3 className="text-lg font-semibold mt-1">{article.title}</h3>
                <div className="flex items-center mt-5 text-gray-500">
                  <span className="mr-3">👁 {article.views}</span>
                  <span>❤️ {article.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default News
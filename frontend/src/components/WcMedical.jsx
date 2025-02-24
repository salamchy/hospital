import Title from "./Title";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import BlackDoctors from "../assets/Blackdoctors.jpg";

const WcMedical = () => {
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur adipisicing  nulla consequaturquis, repudiandae, sitdolore tempora aperiam, officiis ea odio. Quia, eius nemo. Minima!";

  // Splitting paragraph into chunks of 7 words
  const wordsPerLine = 7;
  const lines = paragraph.split(" ").reduce((acc, word, index) => {
    if (index % wordsPerLine === 0) acc.push([]);
    acc[acc.length - 1].push(word);
    return acc;
  }, []);

  return (
    <div className="flex flex-col mt-8 md:mt-26 items-center justify-center text-center">
      {/* title */}
      <Title title="WELCOME TO MEDDICAL" subtitle="A Great Place to Receive Care" />
      {/* paragraph */}
      <div className="pt-5 max-w-2xl">
        <p className="text-lg leading-relaxed">
          {lines.map((line, index) => (
            <span key={index}>
              {line.join(" ")}
              <br />
            </span>
          ))}
        </p>
      </div>
      {/* link */}
      <div className="mt-6 md:mt-10 flex flex-row justify-center">
        <Link to="/learn-more" className="text-secondary text-base flex items-center">
          Learn More
          <FaArrowRight className="ml-2 text-primary flex items-center justify-center" />
        </Link>
      </div>

      {/* image */}
      <div className="w-full flex justify-center items-center bg-white pt-14 ">
        <img
          src={BlackDoctors}
          alt="Medical Team"
          className="w-full max-w-6xl h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
export default WcMedical
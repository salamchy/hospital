import { useState } from "react";

import CheckupIcon from "../assets/checkup.svg";
import CardiogramIcon from "../assets/cardiogram.svg";
import DnaIcon from "../assets/dna.svg";
import BloodIcon from "../assets/blood.svg";

import Image1 from "../assets/rec1.png";
import Image2 from "../assets/rec2.png";

const services = {
  "Free Checkup": {
    icon: CheckupIcon,
    title: "Free Checkup for Everyone",
    images: [Image1, Image2],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem praesentium provident, laudantium optio ea in quia neque dolorum accusantium?"
  },
  Cardiogram: {
    icon: CardiogramIcon,
    title: "A passion for putting patients first.",
    images: [Image2, Image1],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem praesentium provident, laudantium optio ea in quia neque dolorum accusantium?"
  },
  "Dna Testing": {
    icon: DnaIcon,
    title: "Accurate DNA Testing",
    images: [Image1, Image2],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem praesentium provident, laudantium optio ea in quia neque dolorum accusantium?"
  },
  "Blood Bank": {
    icon: BloodIcon,
    title: "Safe & Reliable Blood Bank",
    images: [Image2, Image1],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem praesentium provident, laudantium optio ea in quia neque dolorum accusantium?"
  },
};

const MedicalUi = () => {
  const [activeService, setActiveService] = useState("Cardiogram");

  return (
    <div className="flex flex-col mt-10 lg:flex-row py-10 space-y-5 lg:space-y-0 md:mx-44 mx-5">


      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col">
          {Object.entries(services).map(([service, data]) => (
            <SidebarItem
              key={service}
              text={service}
              Icon={data.icon}
              active={activeService === service}

              className="px-8 py-6 md:px-6 md:py-6 h-32 md:h-48"
              onClick={() => setActiveService(service)}
            />
          ))}
          <button className="bg-primary p-4 text-extra w-full">Read More</button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col text-center bg-white shadow-lg rounded-lg p-12">

        <h1 className="text-2xl font-bold text-primary">{services[activeService].title}</h1>
        <p className="text-base text-gray-500 p-5">{services[activeService].description}</p>
      </div>

      <div className="w-full lg:w-1/4 flex mx-5 md:mx-0 flex-col space-y-4">
        {services[activeService].images.map((img, index) => (
          <img key={index} src={img} alt={`Service ${activeService}`} className="w-full h-full rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
}

export default MedicalUi;


function SidebarItem({ text, Icon, active, onClick }) {
  return (
    <div
      className={`flex items-center flex-col p-4 rounded-lg cursor-pointer text-lg font-medium space-y-3 transition-all duration-300
      ${active ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-200"}`}
      onClick={onClick}
    >
      <img src={Icon} alt={text} className="w-6 h-6" />
      <span>{text}</span>
    </div>
  );
}

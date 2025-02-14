import Title from "./Title";
import { useState } from "react";
import Icons from "../assets/Vector.svg";

// Array of services with correct icons
const services = [
  { _id: 1, name: "Neurology", icon: Icons },
  { _id: 2, name: "Bones", icon: Icons },
  { _id: 3, name: "Oncology", icon: Icons },
  { _id: 4, name: "Otorhinolaryngology", icon: Icons },
  { _id: 5, name: "Ophthalmology", icon: Icons },
  { _id: 6, name: "Cardiovascular", icon: Icons },
  { _id: 7, name: "Pulmonology", icon: Icons },
  { _id: 8, name: "Renal Medicine", icon: Icons },
  { _id: 9, name: "Gastroenterology", icon: Icons },
  { _id: 10, name: "Urology", icon: Icons },
  { _id: 11, name: "Dermatology", icon: Icons },
  { _id: 12, name: "Gynaecology", icon: Icons },
];

const Specialties = () => {
  const [activeService, setActiveService] = useState(7);
  return (
    <div className="mx-5 md:mx-44 my-8 md:my-16">
      <Title title="always caring" subtitle="Our Specialties" />
      <div className="flex justify-center mt-10 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-9xl border mt-10 border-gray-200">
          {services.map(({ _id, icon, name }) => (
            <div
              key={_id}
              className={`flex flex-col items-center justify-center p-16 cursor-pointer transition-all border border-gray-300
                ${activeService === _id ? "bg-blue-900 text-extra" : "bg-white text-black hover:bg-gray-200"}`}
              onClick={() => setActiveService(_id)}
            >
              <img src={icon} className="w-20 h-20" />
              <span className="mt-2 font-medium text-lg">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialties;

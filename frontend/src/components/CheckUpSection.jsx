import React from 'react';
import Vector from "../assets/Vector.png"
import Image1 from "../assets/rec2.png"

// Dummy Data
const checkupData = [
  {
    id: 1,
    title: 'Free Checkup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    image: Image1
  },
  {
    id: 2,
    title: 'Free Checkup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    image: Image1
  },
  {
    id: 3,
    title: 'Free Checkup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    image: Image1
  },
  {
    id: 4,
    title: 'Free Checkup',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Quisque placerat Convallis felis vitae tortor augue. Velit nascetur massa in.',
    image: Image1
  },
];

const ServiceCard = ({ item }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />

      {/* Stethoscope Icon in a Circle */}
      <div className="flex justify-end pr-5 -mt-8">
        <div className="bg-blue-900 p-4 rounded-full shadow-md">
          <img src={Vector} alt="" className="text-white cursor-pointer text-2xl" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-blue-900">{item.title}</h3>
        <p className="text-gray-600 mt-2">{item.description}</p>

        {/* Learn More Link */}
        <a
          href="#"
          className="mt-4 inline-block text-blue-500 font-semibold border-b-2 border-blue-500 hover:border-blue-700 hover:text-blue-700 transition duration-200"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

const CheckupSection = () => {
  return (
    <div className="container mt-10 mx-auto py-12 px-5 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {checkupData.map((item) => (
          <ServiceCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CheckupSection;
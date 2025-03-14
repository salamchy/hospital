import React from "react";
import { useNavigate } from "react-router-dom";
import Vector from "../assets/Vector.png";
import { useGetServicesQuery } from "../features/api/serviceApi";

export const ServiceCard = ({ item }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/service/${item._id}`);
  };

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

        {/* Button to View Details */}
        <button
          onClick={handleViewDetails}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );
};


const CheckupSection = () => {

  const { data: services, isLoading, error } = useGetServicesQuery();

  if (isLoading) return <div>Loading services...</div>;
  if (error) return <div>Error fetching services</div>;

  if (!Array.isArray(services)) {
    return <div>Error: Expected an array of services.</div>;
  }

  return (
    <div className="container mt-10 mx-auto py-12 px-5 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services?.map((item, index) => (
          <ServiceCard key={item.id || index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CheckupSection;
import React from "react";
import { useParams } from "react-router-dom";
import { useGetServiceByIdQuery } from "../features/api/serviceApi";

const ServiceDetail = () => {
  console.log("Fetching service details...");

  const { id } = useParams();
  const { data, isLoading, error } = useGetServiceByIdQuery(id);

  if (isLoading) {
    console.log("Loading service details...");
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">Loading service details...</p>
      </div>
    );
  }

  if (error || !data || !data.success || !data.data) {
    console.error("Error fetching service details:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">Error: Service details not found.</p>
      </div>
    );
  }

  const service = data.data;

  return (
    <div className="container mx-auto mt-32 px-5 py-16 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Image Section */}
        {service.image ? (
          <img src={service.image} alt={service.title} className="w-full h-80 object-cover rounded-md" />
        ) : (
          <div className="w-full h-80 flex items-center justify-center bg-gray-200 rounded-md">
            <p className="text-gray-500">No image available</p>
          </div>
        )}

        {/* Service Title */}
        <h1 className="text-4xl font-bold mt-6 text-blue-900 text-center">{service.title}</h1>

        {/* Service Description */}
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">{service.description}</p>


        <div className="mt-6 text-sm text-gray-500 text-center">
          <p>Created on: {new Date(service.createdAt).toLocaleDateString()}</p>
          <p>Last updated: {new Date(service.updatedAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

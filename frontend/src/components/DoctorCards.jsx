import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useGetDoctorsQuery } from "../features/api/doctorApi";


const DoctorsCard = () => {
  const { data: doctors, error, isLoading } = useGetDoctorsQuery();

  if (isLoading) return <p className="text-center text-lg">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching doctors</p>;

  return (
    <div className='my-8 md:mt-10 mx-5 md:mx-44'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {doctors?.map((doctor, index) => (
          <div key={doctor.id || index} className="p-4">
            <div className="bg-white mt-10 rounded-lg shadow-lg overflow-hidden">
              <img src={doctor.image} alt={doctor.name} className="w-full" />
              <div className="text-center pt-3 space-y-2 bg-blue-100">
                <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
                <p className="text-md font-bold text-primary uppercase">{doctor.specialist}</p>
                <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                  <Link to="#" className="text-extra bg-primary p-2 rounded-full"><FaLinkedinIn /></Link>
                  <Link to="#" className="text-extra bg-primary p-2 rounded-full"><FaFacebookF /></Link>
                  <Link to="#" className="text-extra bg-primary p-2 rounded-full"><FaTwitter /></Link>
                </div>
                <button className="mt-4 w-full cursor-pointer p-2 bg-primary text-white rounded hover:bg-secondary">View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsCard;
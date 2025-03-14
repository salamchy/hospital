import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import Title from './Title';

import { useState, useEffect } from 'react';
import { useGetDoctorsQuery } from "../features/api/doctorApi";


const Doctors = () => {
  const { data: doctors, error, isLoading } = useGetDoctorsQuery();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let slidesToShow = 1;
  if (screenWidth >= 768 && screenWidth < 1024) {
    slidesToShow = 2;
  } else if (screenWidth >= 1024) {
    slidesToShow = 3;
  }

  if (isLoading) return <p className="text-center text-lg">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching doctors</p>;

  return (
    <div className='my-12 md:mt-30 mx-5 md:mx-44'>
      <Title title="trusted care" subtitle="Our Doctors" />
      <Carousel
        showArrows={false}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        autoPlay={true}
        interval={2000}
        centerSlidePercentage={100 / slidesToShow}
      >
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
      </Carousel>
    </div>
  );
};

export default Doctors;
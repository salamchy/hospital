import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <MobileNavbar />
      </div>
      <div className="w-full md:hidden">
        <div className="flex bg-blue-900 pt-4 pb-4 text-white justify-between items-center">
          {/* Logo Section */}
          <div>
            <img src="./Med.svg" alt="logo" className=" h-[1.5rem] w-[12rem]" />
          </div>
          <div className="flex pr-4 space-x-4">
            <FiSearch className="w-6 h-6 cursor-pointer" />
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <IoMdClose className="w-6 h-6 font-bold" /> : <HiMiniBars3 className="w-6 h-6 font-bold" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="flex absolute flex-col z-20 w-full text-2xl text-primary items-center space-y-3 bg-[#BFD2F8] p-4">
            <NavLink to="/" className="hover:text-blue-300">Home</NavLink>
            <NavLink to="/aboutus" className="hover:text-blue-300">About Us</NavLink>
            <NavLink to="/service" className="hover:text-blue-300">Service</NavLink>
            <NavLink to="/doctors" className="hover:text-blue-300">Doctors</NavLink>
            <NavLink to="/news" className="hover:text-blue-300">News</NavLink>
            <NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink>
            <button className="py-2 mt-5 text-xl w-full mx-5 bg-primary text-[#BFD2F8] rounded-full">Appointment</button>
          </div>
        )}
      </div>
    </>
  );
}

const MobileNavbar = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 px-2 py-4 md:hidden">
      <div className="flex justify-between w-full">
        <div className="flex items-center pl-5 space-x-2">
          <img src="./phone.svg" alt="Clock" className="w-8 h-8 text-blue-600" />
          <div className="text-base font-medium">
            <p className="text-gray-800 ">EMERGENCY</p>
            <p className="text-blue-500">(237) 681-812-255</p>
          </div>
        </div>
        <div className="flex items-center pr-5 space-x-2">
          <img src="./clock.svg" alt="Clock" className=" w-8 h-8 text-blue-600" />
          <div className="text-base font-medium">
            <p className=" text-gray-800">LOCATION</p>
            <p className="text-blue-500">0123 Some Place</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img src="./location.svg" alt="Clock" className="w-8 h-8 text-blue-600" />
        <div className="text-base font-medium">
          <p className=" text-gray-800">WORK HOUR</p>
          <p className="text-blue-500 ">09:00 - 20:00 Everyday</p>
        </div>
      </div>
    </div>
  );
}

import { NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaAngleDoubleLeft, FaAngleDoubleRight, FaCalendarCheck, FaRegNewspaper } from "react-icons/fa";
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaUserDoctor, FaListOl } from "react-icons/fa6";
import { MdOutlinePersonAddAlt, MdMedicalServices } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useLogoutUserMutation } from "../../features/api/userApi";
import { toast } from "react-hot-toast";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const [logoutUser] = useLogoutUserMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      localStorage.clear(); // Clear session storage
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`bg-gray-900 text-white h-screen p-5 pt-8 flex flex-col transition-all duration-300 ${isOpen ? "w-64" : "w-20"} relative`}>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-4 top-5 bg-gray-800 p-2 rounded-full cursor-pointer"
        >
          {isOpen ? <FaAngleDoubleLeft className="text-xl" /> : <FaAngleDoubleRight className="text-xl" />}
        </button>

        {/* Sidebar Title */}
        <h1 className={`text-lg font-bold transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}>
          Dashboard
        </h1>

        {/* Navigation Links */}
        <nav className="mt-10 flex-grow">
          <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <FaHome />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Home</span>
          </NavLink>

          <NavLink to="/admin/dashboard/appointment" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <FaCalendarCheck />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Appointment List</span>
          </NavLink>

          <NavLink to="/admin/dashboard/contact" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <AiFillMessage />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Message List</span>
          </NavLink>

          <NavLink to="/admin/dashboard/create" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <MdOutlinePersonAddAlt />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Add Doctor</span>
          </NavLink>

          <NavLink to="/admin/dashboard/all" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <FaUserDoctor />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Doctor List</span>
          </NavLink>

          <NavLink to="/admin/dashboard/news" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <FaRegNewspaper />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Create News</span>
          </NavLink>

          <NavLink to="/admin/dashboard/news-list" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <IoIosListBox />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>News List</span>
          </NavLink>

          <NavLink to="/admin/dashboard/add-service" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <MdMedicalServices />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Add Service</span>
          </NavLink>

          <NavLink to="/admin/dashboard/service-list" className={({ isActive }) => `flex items-center gap-3 p-3 my-2 rounded-md transition-all duration-300 ${isActive ? "bg-blue-500" : "hover:bg-gray-700"}`}>
            <FaListOl />
            <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Service List</span>
          </NavLink>
        </nav>

        {/* Logout Button */}
        <button onClick={handleLogout} className="mt-auto bg-red-600 p-3 rounded-md cursor-pointer flex items-center gap-3 hover:bg-red-700 transition-all duration-300">
          <BiLogOut className="text-lg" />
          <span className={`${isOpen ? "block" : "hidden"} transition-all`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

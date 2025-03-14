import { FiSearch } from "react-icons/fi";
import { NavLink, Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className="fixed top-0 hidden md:block left-0 w-full z-50 bg-white shadow-md">

      {/* Top Bar */}
      <div className="container mx-auto flex justify-between items-center py-3 lg:px-20 text-sm">

        {/* Logo Section */}
        <div>
          <img src="./Meddical.svg" alt="logo" className="h-[2.625rem] w-[12rem]" />
        </div>

        {/* Information Section */}
        <div className="flex items-center md:gap-8 lg:gap-12 flex-nowrap">
          {/* Emergency Contact */}
          <div className="flex items-center gap-2 text-primary text-sm">
            <img src="./phone.svg" alt="Phone" className="w-8 h-8 text-secondary" />
            <div className="font-medium">
              <span className="text-primary uppercase text-base">Emergency</span>
              <div className="text-secondary">+977 9800998877</div>
            </div>
          </div>

          {/* Work Hour */}
          <div className="flex items-center gap-2 text-gray-800 text-sm">
            <img src="./clock.svg" alt="Clock" className="w-8 h-8 text-secondary" />
            <div className="font-medium">
              <span className="text-primary uppercase text-base">WORK HOUR</span>
              <div className="text-secondary">09:00 - 20:00 <span className="text-secondary">Everyday</span></div>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-primary text-sm">
            <img src="./location.svg" alt="Location" className="w-8 h-8 text-secondary" />
            <div className="font-medium">
              <span className="text-base text-gray-700 uppercase">Location</span>
              <div className="text-secondary">0123 Some Place</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-primary text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-20">
          {/* Desktop Menu */}
          <nav className="flex items-center gap-8">
            {["Home", "About Us", "Service", "Doctors", "News", "Contact"].map((item, index) => (
              <NavLink
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '') === 'home' ? '' : item.toLowerCase().replace(/\s+/g, '')}`}
                className={({ isActive }) =>
                  isActive ? "text-secondary text-[1.125rem] font-bold" : "hover:text-secondary text-[1.125rem]"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <FiSearch className="text-white cursor-pointer" size={20} />
            <Link to="/appointment" className="bg-extra text-[16px] hover:bg-secondary text-primary px-6 py-2 rounded-4xl transition">
              Appointment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};


const CombinedNavbar = () => {
  return (
    <header>
      <MobileNavbar />
      <Navbar />
    </header>
  );
}
export default CombinedNavbar;

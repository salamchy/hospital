import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10 px-10">
      <div className="max-w-6xl mx-5 md:mx-40 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">MEDDICAL</h2>
          <p className="mt-2 text-gray-300">Leading the Way in Medical Excellence, Trusted Care.</p>
        </div>

        {/* Middle Section - Links & Contact */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold">Important Links</h3>
            <ul className="mt-2 space-y-1 text-gray-300">
              <li><a href="#">Appointment</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact Us</h3>
            <p className="mt-2 text-gray-300">Call: 9800997755</p>
            <p className="text-gray-300">Email: health@gmail.com</p>
            <p className="text-gray-300">Address: 0123 ktm, Nepal</p>
          </div>
        </div>

        {/* Right Section - Newsletter */}
        <div>
          <h3 className="font-semibold">Newsletter</h3>
          <div className="mt-2 flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 bg-extra text-primary outline-none placeholder-gray-400"
              style={{ WebkitTextFillColor: '#1e3a8a', color: '#1e3a8a' }}
            />
            <button className="bg-extra text-primary p-4" style={{ WebkitTextFillColor: '#1e3a8a', color: '#1e3a8a' }}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-600 my-6" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row md:mx-40 justify-between items-center  text-gray-300 text-sm">
        <p className="flex items-center justify-center">© 2025 MEDDICAL. All Rights Reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white p-2 bg-extra rounded-full"><FaLinkedinIn className="text-primary" /></Link>
          <Link href="#" className="hover:text-white p-2 bg-extra rounded-full"><FaFacebookF className="text-primary" /></Link>
          <Link href="#" className="hover:text-white p-2 bg-extra rounded-full"><FaInstagram className="text-primary" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; Link
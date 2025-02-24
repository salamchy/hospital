import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Form with Title and Subtitle */}
        <div className="w-full md:w-1/2">
          <h2 className="text-secondary font-work font-bold uppercase text-[18px] sm:text-base md:text-lg lg:text-xl">GET IN TOUCH</h2>
          <h3 className="text-xl font-yeseva sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight my-2">Contact</h3>
          <form className="bg-primary text-white shadow-lg">
            <div className="grid grid-cols-2">
              {/* name field */}
              <div className="bg-transparent border border-gray-400">
                <input type="text" placeholder="Name" className="p-2 w-full outline-none border-gray-300" style={{ WebkitTextFillColor: 'white', color: 'white' }} />
              </div>

              {/* email field */}
              <div className="bg-transparent border border-gray-400">
                <input type="email" placeholder="Email" className="p-2 rounded w-full outline-none" style={{ WebkitTextFillColor: 'white', color: 'white' }} />
              </div>
            </div>

            {/* message */}
            <div className="bg-transparent border border-gray-400">
              <input type="text " placeholder="Subject" className="p-2  w-full outline-none" style={{ WebkitTextFillColor: 'white', color: 'white' }} />
            </div>
            <textarea placeholder="Message" rows="5" className="p-2  w-full outline-none" style={{ WebkitTextFillColor: 'white', color: 'white' }}></textarea>
            <button type="submit" className="bg-blue-200 cursor-pointer text-primary font-semibold py-2 px-4 w-full">SUBMIT</button>
          </form>
        </div>

        {/* Right Side: Four Cards */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Emergency */}
          <div className="bg-blue-200 text-blue-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaPhone className="text-2xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">EMERGENCY</h4>
            <p>01 5467890</p>
            <p>01 7654345</p>
          </div>

          {/* Location */}
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaMapMarkerAlt className="text-2xl mb-4 text-blue-200" />
            <h4 className="text-lg font-semibold mb-2">LOCATION</h4>
            <p>0123 KTM Dhapasi</p>
            <p>9876 KTM Tokha</p>
          </div>

          {/* Email */}
          <div className="bg-blue-200 text-blue-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaEnvelope className="text-2xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">EMAIL</h4>
            <p>abcd@gmail.com</p>
            <p>test@gmail.com</p>
          </div>

          {/* Working Hours */}
          <div className="bg-blue-200 text-blue-900 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <FaClock className="text-2xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">WORKING HOURS</h4>
            <p>Mon-Sat 09:00-20:00</p>
            <p>Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
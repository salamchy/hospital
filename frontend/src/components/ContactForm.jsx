import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { useSubmitContactFormMutation } from "../features/api/contactApi";
import { toast, Toaster } from "react-hot-toast";
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitContactForm, { isLoading }] = useSubmitContactFormMutation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitContactForm(formData).unwrap();
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Toaster position="top-right" />
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side: Form with Title and Subtitle */}
        <div className="w-full md:w-1/2">
          <h2 className="text-secondary font-work font-bold uppercase text-[18px] sm:text-base md:text-lg lg:text-xl">GET IN TOUCH</h2>
          <h3 className="text-xl font-yeseva sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight my-2">Contact</h3>
          <form onSubmit={handleSubmit} className="bg-primary text-white shadow-lg">


            <div className="grid grid-cols-2">
              {/* name field */}
              <div className="bg-transparent border border-gray-400">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}

                  onChange={handleChange}
                  className="p-2 w-full outline-none border-gray-300" style={{ WebkitTextFillColor: 'white', color: 'white' }}
                />
              </div>

              {/* email field */}
              <div className="bg-transparent border border-gray-400">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}

                  onChange={handleChange}
                  className="p-2 rounded w-full outline-none"
                  style={{ WebkitTextFillColor: 'white', color: 'white' }}
                />
              </div>
            </div>

            {/* message */}
            <div className="bg-transparent border border-gray-400">
              <input
                type="text "
                name="subject"
                placeholder="Subject"
                value={formData.subject}

                onChange={handleChange}
                className="p-2  w-full outline-none"
                style={{ WebkitTextFillColor: 'white', color: 'white' }}
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              rows="5"
              value={formData.message}

              onChange={handleChange}
              className="p-2  w-full outline-none"
              style={{
                WebkitTextFillColor: 'white',
                color: 'white'
              }}></textarea>
            <button type="submit" className="bg-blue-200 cursor-pointer text-primary font-semibold py-2 px-4 w-full" disabled={isLoading}>{isLoading ? "Submitting..." : "Submit"}</button>
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

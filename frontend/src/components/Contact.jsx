import Title from "./Title"
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaPhoneAlt className="text-2xl mx-auto text-primary" />,
    title: "EMERGENCY",
    details: ["01 7654345", "01 6537783"],
    bgColor: "bg-blue-100",
    textColor: "text-blue-900",
  },
  {
    id: 2,
    icon: <FaMapMarkerAlt className="text-2xl mx-auto text-white" />,
    title: "LOCATION",
    details: ["ktm", "9876 Nepal"],
    bgColor: "bg-blue-900 text-white",
    textColor: "text-white",
  },
  {
    id: 3,
    icon: <FaEnvelope className="text-2xl mx-auto text-primary" />,
    title: "EMAIL",
    details: ["hospital@gmail.com", "myhospital@gmail.com"],
    bgColor: "bg-blue-100",
    textColor: "text-blue-900",
  },
  {
    id: 4,
    icon: <FaClock className="text-2xl mx-auto text-primary" />,
    title: "WORKING HOURS",
    details: ["Mon-Sat 09:00-20:00", "Sunday Emergency only"],
    bgColor: "bg-blue-100",
    textColor: "text-blue-900",
  },
];


const Contact = () => {
  return (
    <div className='my-8 md:my-20 mx-6 md:mx-44'>
      <Title title="get in touch" subtitle="Contact" />

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {contactData.map((item) => (
          <div
            key={item.id}
            className={`px-6 py-15 rounded-md text-center ${item.bgColor}`}
          >
            <div className="mb-2">{item.icon}</div>
            <h3 className={`font-bold ${item.textColor}`}>{item.title}</h3>
            {item.details.map((line, index) => (
              <p key={index} className={`${item.textColor}`}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Contact
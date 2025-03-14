import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { FaPhoneVolume } from "react-icons/fa6";
import AppointmentForm from './AppointmentForm';

const AppointmentWithSchedule = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phone: '',
    doctor: '',
    department: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="container py-12 pl-72 flex flex-col justify-center items-center md:flex-row gap-8">
      {/* Left Side: Appointment Form */}
      <div className="w-full">
        <h2 className="text-[32px] font-bold text-secondary font-yeseva">
          Book an Appointment
        </h2>
        <p className="my-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
        </p>
        <div className="relative w-full bg-blue-900 shadow-lg z-10">
          <AppointmentForm />
        </div>
      </div>

      {/* Right Side: Schedule and Emergency */}
      <div className="w-full md:w-1/2 mt-5 md:py-20">
        <div className="flex flex-col gap-6">
          <div className="bg-blue-900 text-white px-6 w-80 md:py-10 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-extra font-yeseva mb-4">
              Schedule Hours
            </h2>
            <div className="space-y-4">
              {[
                { day: "Monday", time: "09:00 AM - 07:00 PM" },
                { day: "Tuesday", time: "09:00 AM - 07:00 PM" },
                { day: "Wednesday", time: "09:00 AM - 07:00 PM" },
                { day: "Thursday", time: "09:00 AM - 07:00 PM" },
                { day: "Friday", time: "09:00 AM - 07:00 PM" },
                { day: "Saturday", time: "09:00 AM - 07:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between border-b border-white/20 pb-1"
                >
                  <span>{schedule.day}</span>
                  <span>{schedule.time}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center pl-5 py-4 gap-4">
              <FaPhoneVolume className="w-8 h-8 text-gray-300" />
              <div>
                <p className="text-xl font-yeseva">Emergency</p>
                <p className="text-lg tracking-wide">(123) 456-789-101</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentWithSchedule;
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import toast, { Toaster } from "react-hot-toast";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';

import { useCreateAppointmentMutation } from "../features/api/appointmentApi";

const AppointmentForm = () => {
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.gender || !formData.email || !formData.phone || !formData.doctor || !formData.department) {
      toast.error("Please fill all required fields!");
      return;
    }

    const appointmentData = { ...formData, date: startDate, time };

    try {
      await createAppointment(appointmentData).unwrap();
      toast.success("Appointment created successfully!");

      // Reset form fields after successful submission
      setFormData({
        name: '',
        gender: '',
        email: '',
        phone: '',
        doctor: '',
        department: '',
        message: ''
      });
      setStartDate(new Date());
      setTime("10:00");

    } catch (error) {
      toast.error(error.data?.message || "Failed to create appointment");
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <form onSubmit={handleSubmit} className="space-y-0">
        <div className="grid grid-cols-2">
          {/* Name Input */}
          <div className="bg-transparent border border-gray-400">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent outline-none"
              style={{ WebkitTextFillColor: 'white', color: 'white' }}
            />
          </div>

          {/* Gender Dropdown */}
          <div className="bg-transparent border border-gray-400">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent"

            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Email Input */}
          <div className="bg-transparent border border-gray-400">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent outline-none"
              style={{ WebkitTextFillColor: 'white', color: 'white' }}
            />
          </div>

          {/* Phone Input */}
          <div className="bg-transparent border border-gray-400">
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent outline-none"
              style={{ WebkitTextFillColor: 'white', color: 'white' }}
            />
          </div>

          {/* Date Picker */}
          <div className="bg-transparent border border-gray-400">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent outline-none"
              placeholderText="Select Date"
            />
          </div>

          {/* Time Picker */}
          <div className="bg-transparent border border-gray-400">
            <TimePicker
              onChange={setTime}
              value={time}
              className="w-full p-2 text-white bg-transparent"
              disableClock={true}
              clearIcon={null}
            />
          </div>

          {/* Doctor Dropdown */}
          <div className="bg-transparent border border-gray-400">
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent"
            >
              <option value="" disabled>Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Williams">Dr. Williams</option>
            </select>
          </div>

          {/* Department Dropdown */}
          <div className="bg-transparent border border-gray-400">
            <select
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full p-2 md:p-4 rounded text-white bg-transparent"
            >
              <option value="" disabled>Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>
        </div>

        {/* Message Textarea */}
        <div className="bg-transparent border border-gray-400">
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 md:p-4 rounded text-white bg-transparent outline-none"
            style={{ WebkitTextFillColor: 'white', color: 'white' }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer p-2 md:p-4 bg-extra text-primary hover:bg-secondary"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
    </>
  );
};

export default AppointmentForm;

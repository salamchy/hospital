import BgImage from "../assets/appointmentBg.png"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const Appointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("10: 00");
  return (
    <div className="relative">
      {/* Full Width Background Image */}
      <img
        src={BgImage}
        alt="Doctor"
        className="absolute inset-0 w-full object-cover opacity-20"
      />
      <div className="mx-5 md:mx-44 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[500px]">
        {/* Left Section - Text */}
        <div className="relative w-full md:mt-32 md:w-1/2 z-10 p-6 flex flex-col justify-center">
          <h2 className="text-[32px] font-bold text-secondary font-yeseva">
            Book an Appointment
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="relative w-full md:mt-28 md:w-1/2 bg-blue-900 shadow-lg z-10">
          <form className="space-y-0">
            <div className="grid grid-cols-2">
              {/* input name */}
              <div className="bg-transparent border border-gray-400">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent"
                  style={{ WebkitTextFillColor: 'white', color: 'white' }}
                />
              </div>
              {/* select Gender */}
              <div className="bg-transparent border border-gray-400">
                <select
                  className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent"
                >
                  <option className="bg-extra" value="" disabled selected>Select Gender</option>
                  <option className="bg-extra">Male</option>
                  <option className="bg-extra">Female</option>
                  <option className="bg-extra">Other</option>
                </select>
              </div>

              {/* input email */}
              <div className="bg-transparent border border-gray-400">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent"
                  style={{ WebkitTextFillColor: 'white', color: 'white' }}
                />
              </div>

              {/* input phone */}
              <div className="bg-transparent border border-gray-400">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent"
                  style={{ WebkitTextFillColor: 'white', color: 'white' }}
                />
              </div>

              {/* input date */}
              <div className="bg-transparent border border-gray-400">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent border-none focus:ring-0"
                  placeholderText="Select Date"
                  style={{ WebkitTextFillColor: 'white', color: 'white' }}
                />
              </div>

              {/* input time */}
              <div className="bg-transparent border border-gray-400">
                <TimePicker
                  onChange={setTime}
                  value={time}
                  className="w-full p-0 md:p-2 text-white rounded outline-none bg-transparent border-primary focus:ring-0"
                  disableClock={true}
                  clearIcon={null}
                  style={{
                    border: "none",
                    outline: "none",
                    boxShadow: "none",
                    color: "blue",
                    width: "100%",
                    height: "100%",
                  }}
                />

              </div>

              {/* select doctor */}
              <div className="bg-transparent border border-gray-400">
                <select className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent">
                  <option className="bg-extra" value="" disabled selected>Select Doctors</option>
                  <option className="bg-extra">Dr. Smith</option>
                  <option className="bg-extra">Dr. Johnson</option>
                  <option className="bg-extra">Dr. Williams</option>
                </select>
              </div>

              {/* select departments */}
              <div className="bg-transparent border border-gray-400">
                <select className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent">
                  <option className="bg-extra" value="" disabled selected>Select Department</option>
                  <option className="bg-extra">Cardiology</option>
                  <option className="bg-extra">Dermatology</option>
                  <option className="bg-extra">Neurology</option>
                </select>
              </div>
            </div>

            {/* message */}
            <div className="bg-transparent border border-gray-400">
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full p-2 md:p-4 rounded text-white outline-none bg-transparent"
                style={{ WebkitTextFillColor: 'white', color: 'white' }}
              ></textarea>
            </div>
            <button type="submit" className="w-full p-2 md:p-4 bg-extra text-primary hover:bg-secondary">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Appointment
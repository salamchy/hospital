
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import { FaPhoneVolume } from "react-icons/fa6";


const AppointmentWithSecudle = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("10: 00");
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
        <>
          <div className="relative w-full bg-blue-900 shadow-lg z-10">
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
        </>
      </div>

      {/* Right Side: Schedule and Emergency */}
      <div className="w-full md:w-1/2 mt-5 md:py-20">
        <div className="flex flex-col gap-6">
          {/* Schedule Hours */}
          <div className="bg-blue-900 text-white px-6 w-80 md:py-10 shadow-lg">
            <h2 className="text-3xl font-bold text-center text-extra font-yeseva mb-4">Schedule Hours</h2>
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
                <div key={index} className="flex justify-between border-b border-white/20 pb-1">
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
  )
}
export default AppointmentWithSecudle
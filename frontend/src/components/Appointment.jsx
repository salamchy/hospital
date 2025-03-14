import BgImage from "../assets/appointmentBg.png";
import { toast, Toaster } from 'react-hot-toast';
import AppointmentForm from "./AppointmentForm";

const Appointment = () => {

  return (
    <div className="relative min-h-screen">
      <Toaster position="top-center" />
      <img
        src={BgImage}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-blue-900">
              Schedule Your Visit
            </h1>
            <p className="text-gray-600 text-lg">
              Our team of experienced professionals is ready to provide you with
              exceptional care. Choose a convenient time and let us know
              how we can assist you.
            </p>
          </div>

          <div className="lg:w-1/2 bg-white rounded-xl shadow-2xl p-8">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
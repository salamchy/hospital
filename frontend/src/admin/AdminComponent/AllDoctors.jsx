import React from "react";
import { useGetDoctorsQuery, useDeleteDoctorMutation } from "../../features/api/doctorApi";
import toast from "react-hot-toast";

const DoctorsList = () => {
  const { data: doctors, error, isLoading } = useGetDoctorsQuery();
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      try {
        await deleteDoctor(id).unwrap();
        toast.success("Doctor deleted successfully!");
      } catch (error) {
        console.error("Error deleting doctor:", error);
        toast.error("Failed to delete doctor.");
      }
    }
  };

  if (isLoading) return <p className="text-center text-lg">Loading doctors...</p>;
  if (error) return <p className="text-center text-red-500">Error fetching doctors</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Doctors List</h2>
      {doctors?.length === 0 ? (
        <p className="text-center text-gray-600">No doctors available.</p>
      ) : (
        <ul className="space-y-4">
          {doctors.map((doctor) => (
            <li
              key={doctor._id}
              className="flex items-center justify-between p-4 border rounded-lg shadow-md bg-white"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-semibold">{doctor.name}</p>
                  <p className="text-gray-600">{doctor.specialist}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(doctor._id)}
                className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DoctorsList;


import { useGetAppointmentsQuery } from "../../features/api/appointmentApi";

const AllAppointment = ({ refetch }) => {

  // Fetch appointments
  const { data: appointments, error, isLoading } = useGetAppointmentsQuery(refetch);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-primary mb-4">All Appointments</h2>

      {/* Loading State */}
      {isLoading && <p className="text-gray-500">Loading appointments...</p>}

      {/* Error Handling */}
      {error && <p className="text-red-500">Failed to fetch appointments.</p>}


      {/* Appointments Table */}
      {appointments && appointments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Message</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Doctor</th>
                <th className="p-3 border">Department</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id} className="text-center border-b">
                  <td className="p-3 border">{appointment.name}</td>
                  <td className="p-3 border">{appointment.email}</td>
                  <td className="p-3 border">{appointment.phone}</td>
                  <td className="p-3 border">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="p-3 border">{appointment.message}</td>
                  <td className="p-3 border">{appointment.time}</td>
                  <td className="p-3 border">{appointment.doctor}</td>
                  <td className="p-3 border">{appointment.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        !isLoading && <p className="text-gray-500">No appointments found.</p>
      )}
    </div>
  );
};

export default AllAppointment;

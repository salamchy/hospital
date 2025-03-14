import { useGetServicesQuery, useDeleteServiceMutation } from '../../features/api/serviceApi';
import toast from 'react-hot-toast';

const ServiceList = () => {
  const { data: services, isLoading, error } = useGetServicesQuery();
  const [deleteService, { isLoading: isDeleting, error: deleteError }] = useDeleteServiceMutation();

  const handleDelete = async (id) => {
    try {
      await deleteService(id).unwrap();
      toast.success('Service deleted successfully!');
    } catch (err) {
      toast.error('Error deleting service');
    }
  };

  if (isLoading) return <div>Loading services...</div>;
  if (error) return <div>Error fetching services</div>;

  if (!Array.isArray(services)) {
    return <div>Error: Expected an array of services.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">All Services</h1>

      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service._id} className="flex items-center justify-between p-4 border border-gray-300 rounded-md shadow-sm">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl font-semibold text-gray-700 truncate">{service.title}</h2>
              <p className="text-sm text-gray-500 truncate overflow-hidden">{service.description}</p>
            </div>
            <div className="flex items-center space-x-4">
              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              )}
              <button
                onClick={() => handleDelete(service._id)}
                disabled={isDeleting}
                className={`px-4 py-2 cursor-pointer text-white font-semibold rounded-md transition duration-300 ease-in-out ${isDeleting ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'
                  }`}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </li>
        ))}
      </ul>

      {deleteError && <div className="mt-4 text-red-500 text-center">{deleteError.message}</div>}
    </div>
  );
};

export default ServiceList;

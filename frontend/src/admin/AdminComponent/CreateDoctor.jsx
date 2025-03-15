import { useState } from "react";
import toast from "react-hot-toast";
import { useCreateDoctorMutation } from "../../features/api/doctorApi";

const CreateDoctor = () => {
  const [name, setName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [image, setImage] = useState(null);
  const [createDoctor, { isLoading, error }] = useCreateDoctorMutation();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !specialist || !image) {
      toast.error("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("specialist", specialist);
    formData.append("image", image);

    try {
      await createDoctor(formData).unwrap();
      toast.success("Doctor added successfully!");
      setName("");
      setSpecialist("");
      setImage(null);
    } catch (error) {
      toast.error("Failed to add doctor");
    }
  };

  return (
    <div className="max-w-2xl mt-14 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Add New Doctor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600">Specialist</label>
          <input
            type="text"
            value={specialist}
            onChange={(e) => setSpecialist(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600">Image</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 cursor-pointer text-white font-semibold rounded-md transition duration-300 ease-in-out ${isLoading ? 'bg-gray-400' : 'bg-secondary hover:bg-blue-600'}`}
        >
          {isLoading ? "Adding Doctor..." : "Add Doctor"}
        </button>
      </form>

      {error && <div className="mt-4 text-red-500 text-center">{error.message}</div>}
    </div>
  );
};

export default CreateDoctor;

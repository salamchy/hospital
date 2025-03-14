import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCreateDoctorMutation } from "../../features/api/doctorApi";

const CreateDoctor = () => {
  const [name, setName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // RTK Query Mutation Hook
  const [createDoctor, { isLoading }] = useCreateDoctorMutation();

  // Handle file selection and show preview
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // Handle form submission
  const handleCreateDoctor = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("Please upload an image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    formData.append("specialist", specialist);

    try {
      const response = await createDoctor(formData).unwrap();

      toast.success("Doctor added successfully!");
      setName("");
      setSpecialist("");
      setFile(null);
      setPreview(null);
    } catch (error) {
      console.error("Error creating doctor:", error);
      toast.error(error?.data?.message || "Something went wrong. Try again!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold text-center mb-4">Add New Doctor</h2>

        <form onSubmit={handleCreateDoctor} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter Doctor Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Specialist</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter Specialization"
              value={specialist}
              onChange={(e) => setSpecialist(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Upload Image</label>
            <input className="w-full p-2 border rounded" type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          {preview && (
            <div className="mt-2">
              <img src={preview} alt="Preview" className="w-full h-40 object-cover rounded-md" />
            </div>
          )}

          <button
            type="submit"
            className={`w-full cursor-pointer p-2 text-white rounded ${isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
              }`}
            disabled={isLoading}
          >
            {isLoading ? "Adding Doctor..." : "Add Doctor"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateDoctor;

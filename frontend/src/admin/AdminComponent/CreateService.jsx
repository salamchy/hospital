import React, { useState } from 'react';
import { useAddServiceMutation } from '../../features/api/serviceApi';
import toast from 'react-hot-toast';

const CreateService = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [addService, { isLoading, error }] = useAddServiceMutation();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      toast.error('All fields are required!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if (image) formData.append('image', image);

    try {
      await addService(formData).unwrap();
      setTitle('');
      setDescription('');
      setImage(null);
      toast.success('Service added successfully!');
    } catch (err) {
      toast.error('Error adding service');
    }
  };

  return (
    <div className="max-w-2xl mt-14 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">Create Service</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-600">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-600">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          className={`w-full p-3 cursor-pointer text-white font-semibold rounded-md transition duration-300 ease-in-out ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            }`}
        >
          {isLoading ? 'Adding Service...' : 'Add Service'}
        </button>
      </form>

      {error && <div className="mt-4 text-red-500 text-center">{error.message}</div>}
    </div>
  );
};

export default CreateService;

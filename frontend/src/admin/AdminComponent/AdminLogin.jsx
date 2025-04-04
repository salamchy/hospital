import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailure } from "../../features/slice/authSlice";
import { useLoginUserMutation } from "../../features/api/userApi";
import { FaUser, FaLock } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await loginUser(credentials);
      if ("error" in response) {
        throw new Error(response.error?.data?.message || "Login failed");
      }
      dispatch(loginSuccess({ token: response.data.token, email: credentials.email }));
      toast.success("Login successful!");
      setCredentials({ email: "", password: "" });
      navigate("/admin/dashboard");
    } catch (err) {
      dispatch(loginFailure(err.message));
      toast.error(err.message || "An error occurred during login.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <Toaster position="top-right" />
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 relative">
            <FaLock className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-secondary cursor-pointer hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

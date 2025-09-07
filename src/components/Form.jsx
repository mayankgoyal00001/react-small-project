import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submit logic here
  };

  return (
    <div className="flex h-screen">
      {/* Left Image */}
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
        }}
      ></div>

      {/* Right Form */}
      <div className="w-1/2 flex items-center justify-center bg-gradient-to-b from-pink-200 to-pink-400">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-3/4 max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mb-6 px-3 py-2 border-b border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

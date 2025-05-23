import React, { useState } from "react";

function Frame() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-[#FFFFFF0A]">
      {/* Login Card with background image */}
      <div
        className="relative p-8 rounded-3xl shadow-lg w-full max-w-md bg-cover bg-center"
        style={{ backgroundImage: "url('/frame.png')" }}
      >
        {/* Optional dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-3xl"></div>

        {/* Content on top of background */}
        <div className="relative z-10 text-white">
          {/* Heading */}
          <h1 className="text-xl font-bold mb-2">Diagnostic Questions</h1>

          {/* Bottom Border under Heading */}
          <div
            style={{ border: "0.5px solid #FFFFFF" }}
            className="mt-3 ml-4"
          ></div>

          {/* Username Field */}
          <div className="mb-6 mt-10">
            <label htmlFor="username" className="block text-lg font-medium">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-[#FFFFFF0D] text-[#C8CACB] backdrop-blur-md placeholder:text-[#C8CACB]"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Field with Eye Icon */}
          <div className="mb-6 mt-5 relative">
            <label htmlFor="password" className="block text-lg font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full p-3 mt-2 border border-gray-600 rounded-lg bg-[#FFFFFF0D] text-[#C8CACB] backdrop-blur-md pr-10"
              placeholder="Enter your password"
            />
            <img
              src="/Vector.png"
              alt="eye"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[52px] w-5 h-5 cursor-pointer"
              title={showPassword ? "Hide Password" : "Show Password"}
            />
          </div>

          {/* Login Button */}
          <button className="w-full mt-5 p-3 bg-[#1B59F8] text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 mb-4">
            Login
          </button>

          {/* Bottom Border under Button */}
          <div style={{ border: "0.5px solid #FFFFFF" }} className="mt-2"></div>
          <div className="border-t border-gray-700 mb-4"></div>

          {/* Register Section */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <p>Don't have an account?</p>
            <button className="text-[#1B59F8] hover:underline">
              Register Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Frame;

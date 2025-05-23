import React from "react";
import Button from "./Button";

function AnchorMessageScreen() {
  return (
    <>
      <div className="relative w-full h-screen bg-black">
        {/* Background Image */}
        <img
          src="/photo.png"
          alt="Background"
          className="w-full h-full object-cover"
        />

        {/* Centered Content Over Image */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-white p-6 rounded-lg text-center max-w-4xl flex flex-col justify-center items-center">
            <h1 className="mb-6 text-xl sm:text-2xl text-[#1B59F8] font-medium font-serif">
              Got it.
            </h1>

            <p className="text-2xl sm:text-3xl w-full max-w-[900px] font-bold mb-6 leading-snug">
              Based on what you shared,
              <br />
              we’ll focus this session around strategic alignment
              <br />
              and decision clarity
            </p>

            <p className="text-base sm:text-lg max-w-[750px] w-full leading-relaxed">
              This isn’t about fixing everything. It’s about moving forward from
              where you are—with clarity
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              <Button
                label="Start My Session"
                className="bg-[#1B59F8] hover:bg-blue-700"
              />
              <Button
                label="Adjust My Answers"
                className="bg-[#D8D8D8] hover:bg-gray-300 text-[#979797]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnchorMessageScreen;

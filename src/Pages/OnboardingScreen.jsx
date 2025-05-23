import React from "react";
import Button from "./Button";

function OnboardingScreen() {
  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center text-white text-center p-6"
      style={{
        backgroundImage: "url('/Home.png')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <div className="flex flex-col items-center">
        <p className="mb-6 text-xl sm:text-2xl text-[#1B59F8] font-medium font-serif">
          Welcome to
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Clarity OS</h1>
        <p className="sm:text-lg mt-4 text-xl">
          You’re not here to get answers. You’re here to remember
        </p>
        <Button
          label="Begin Calibration"
          className="mt-12 bg-[#1B59F8] hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        />
      </div>
    </div>
  );
}

export default OnboardingScreen;

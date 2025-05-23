import React, { useState } from "react";

const questions = [
  "What’s the most urgent thing on your mind right now?",
  "How do you feel about your current business?",
  "When was the last time you felt fully aligned with your work?",
  "What do you want to feel after using Clarity OS today?",
  "If Clarity OS could fix one thing today, what would it be?",
];

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleQuestionClick = (index) => {
    setCurrentQuestion(index);
  };

  const getIconColor = (index) =>
    index === currentQuestion ? "#49D40E" : "#DADBD9";

  return (
    <div className="relative flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-72 pl-16 pr-6 py-6 relative z-10">
        <h2 className="text-[35px] p-2 mb-5 mt-10 font-medium italic font-zilla">
          Diagnostic Questions
        </h2>
        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              onClick={() => handleQuestionClick(index)}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: getIconColor(index) }}
              >
                <img
                  src="/yes.png"
                  alt={`Tick for question ${index + 1}`}
                  className="w-3.5 h-3.5 text-center"
                />
              </div>
              <span className="text-lg pl-6">Question {index + 1}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Vertical line */}
      <div
        style={{ border: "1px solid #212121" }}
        className="mt-10 ml-5 h-[480px]"
      ></div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-black">
        <div className="w-full max-w-3xl px-4">
          {/* Question Line with Brain Image */}
          <div className="flex items-center gap-3 mb-10">
            <img src="/noto_brain.png" alt="Brain icon" className="w-8 h-8" />
            <h1 className="text-2xl font-semibold text-white">
              {questions[currentQuestion]}
            </h1>
          </div>

          {/* Input Box */}
          <textarea
            className="w-full h-52 p-4 rounded-lg bg-white/5 text-white placeholder-white/70 border border-gray-600 resize-none shadow-sm"
            placeholder="What's on your mind?..."
          ></textarea>

          {/* Buttons */}
          <div className="flex justify-end mt-9 gap-4">
            <button
              onClick={() =>
                setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev))
              }
              className="px-14 py-2 bg-white text-[#1B59F8] rounded-lg hover:bg-white/30 transition"
            >
              Back
            </button>
            <button
              onClick={() =>
                setCurrentQuestion((prev) =>
                  prev < questions.length - 1 ? prev + 1 : prev
                )
              }
              className="px-14 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Question;

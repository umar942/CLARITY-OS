// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // BrowserRouter should be in main.jsx for Vite
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat"; // Assuming this is your default/main chat interface
import Settings from "./Pages/setting"; // Assuming this is correct
import Reflection from "./Pages/Reflection";
import "./App.css";
import SessionDetailsPage from "./components/Session"; // Your session detail component
import AnchorMessageScreen from "./Pages/AnchorMessageScreen";
import Frame from "./Pages/Frame";
import Question from "./Pages/Question";
import OnboardingScreen from "./Pages/OnboardingScreen";

function App() {
  return (
    <>
      {/* <div className="flex h-screen bg-black">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/sessions" element={<Chat />} />
            <Route path="/chat" element={<Chat />} />{" "}
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/analytics"
              element={
                <div className="flex-1 flex items-center justify-center text-white">
                  Analytics Page Coming Soon
                </div>
              }
            />
            <Route path="/reflection" element={<Reflection />} />
            <Route
              path="/session/:sessionId"
              element={<SessionDetailsPage />}
            />
          </Routes>
        </div>
      </div> */}
      <div>
        {/* <AnchorMessageScreen /> */}
        <Frame />
        {/* <Question /> */}
        {/* <OnboardingScreen /> */}
      </div>
    </>
  );
}

export default App;

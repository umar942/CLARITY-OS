// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Chat from "./Pages/Chat";
import Settings from "./Pages/setting";
import Reflection from "./Pages/Reflection";
import "./App.css";
import SessionDetailsPage from "./components/Session";

function App() {
  return (
    <div className="flex h-screen bg-black"> {/* Consider if bg-black is intended or contributing */}
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<Chat/>} />
          
          <Route path="/settings" element={<Settings />} />
          <Route path="/reflection" element={<Reflection />} />
          {/* CORRECTED ROUTE for SessionDetailsPage */}
          <Route path="/session/:sessionId" element={<SessionDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
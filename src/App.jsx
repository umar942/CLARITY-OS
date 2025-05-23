// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter should be in main.jsx for Vite
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Chat from './Pages/Chat'; // Assuming this is your default/main chat interface
import Settings from './Pages/setting'; // Assuming this is correct
import Reflection from './Pages/Reflection'
import './App.css';
import SessionDetailsPage from './components/Session'; // Your session detail component

function App() {
  return (
    <div className="flex h-screen bg-black"> {/* Consider a lighter app background if SessionDetailsPage is white */}
      {/* Sidebar - Always visible */}
      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden"> {/* This will contain the routed components */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Or <Chat /> if that's your main landing page */}
          
          {/* If your navItems in Sidebar has a "/sessions" path that should show the Chat interface or a list */}
          <Route path="/sessions" element={<Chat />} /> 
          
          <Route path="/chat" element={<Chat />} /> {/* If you have a dedicated /chat route */}
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<div className="flex-1 flex items-center justify-center text-white">Analytics Page Coming Soon</div>} />
 <Route path="/reflection" element={<Reflection />} /> 
          {/* === ADD THIS ROUTE FOR SESSION DETAILS === */}
          {/* This path MUST match the links generated in Sidebar.js */}
          {/* Based on your Sidebar.js, the links will be "/session/:id" */}
          <Route path="/session/:sessionId" element={<SessionDetailsPage />} />
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
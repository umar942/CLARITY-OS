
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'; // IMPORTANT for dynamic routes
import { Cog, Brain, SendHorizonal, ChevronDown, Star, Download, MoreVertical } from 'lucide-react';

const initialMessages = [ /* ... your messages data ... */ ]; // Keep this for now

const SessionDetailsPage = () => { // Or rename to just "Session" and update export
  const { sessionId } = useParams(); // Get sessionId from URL
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    console.log("Attempting to render SessionDetailsPage for sessionId:", sessionId);
    // In a real app, you would fetch messages for this specific sessionId
    // For now, we'll just log and use the initialMessages
    // You might want to filter initialMessages or have a different set per ID for testing
    setMessages(initialMessages); 
  }, [sessionId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatarUrl: 'https://i.pravatar.cc/40?u=sarah'
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setInputValue('');
  };

  return (
    <div className="flex-1 bg-white p-6 lg:p-8 rounded-l-2xl shadow-xl flex flex-col h-full overflow-hidden">
      <header className="flex justify-between items-center mb-6 flex-shrink-0 pb-4 border-b border-slate-200">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-slate-500">Good Morning</p>
          <h1 className="text-2xl font-semibold text-slate-800 tracking-tight truncate">Sarah Joshia</h1>
          <p className="text-xs text-slate-400 mt-0.5">Today, 27 Oct 2024</p>
        </div>
        <div className="flex-1 flex justify-center min-w-0 px-4">
          <h2 className="text-md font-medium text-slate-600 bg-slate-100 px-4 py-1.5 rounded-lg border border-slate-200 truncate">
            Session ID: {sessionId} {/* Display the dynamic ID */}
          </h2>
        </div>
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button className="p-2 text-slate-500 hover:text-yellow-500 hover:bg-yellow-50 rounded-full transition-colors duration-150"><Star size={18} /></button>
          <button className="flex items-center space-x-1.5 bg-blue-600 text-white text-xs font-medium px-3.5 py-2 rounded-lg shadow-sm hover:bg-blue-700 transition-colors"><Download size={14} /><span>Download</span></button>
          <button className="p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors duration-150"><MoreVertical size={18} /></button>
          <div className="flex items-center space-x-1.5 border border-slate-200 rounded-lg px-2.5 py-1.5 cursor-pointer hover:border-slate-300 hover:bg-slate-50 transition-all duration-150 ml-2"><span className="text-md leading-none">🇬🇧</span> <span className="text-xs font-medium text-slate-600">USA</span> <ChevronDown size={14} className="text-slate-400" /></div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto py-4 space-y-5 custom-scrollbar-chat pr-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-end space-x-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
            {msg.sender === 'ai' && (<img src={msg.avatarUrl} alt="AI Avatar" className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm object-cover"/>)}
            <div className={`max-w-[70%] p-3.5 rounded-xl shadow-sm leading-relaxed ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-slate-100 text-slate-700 rounded-bl-none border border-slate-200'}`}>
              {msg.sender === 'ai' && <p className="text-xs font-semibold text-blue-600 mb-1">Clarity OS</p>}
              <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
              <p className={`text-xs mt-1.5 ${msg.sender === 'user' ? 'text-blue-100/80' : 'text-slate-400'} text-right`}>{msg.timestamp}</p>
            </div>
            {msg.sender === 'user' && (<img src={msg.avatarUrl} alt="User Avatar" className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm object-cover"/>)}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>
      <footer className="mt-auto w-full max-w-4xl mx-auto pt-5 pb-3 flex-shrink-0">
        <div className="relative flex items-center bg-slate-50 rounded-xl p-2 shadow-sm border border-slate-200 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-400 transition-all duration-150">
          <Brain size={20} strokeWidth={1.8} className="text-slate-500 ml-3 mr-2 flex-shrink-0" />
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="What's on your mind?..." className="flex-grow bg-transparent text-sm text-slate-700 placeholder-slate-500/80 outline-none px-2 py-3"/>
          <button onClick={handleSendMessage} className={`bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition-all duration-200 mx-1 shadow-md transform ${inputValue ? 'scale-100 opacity-100' : 'scale-95 opacity-70'}`} disabled={!inputValue}><SendHorizonal size={18} strokeWidth={2.2}/></button>
        </div>
      </footer>
    </div>
  );
};

export default SessionDetailsPage; // Or export default Session;
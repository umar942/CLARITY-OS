import React, { useState } from 'react';
import { Cog, Brain, SendHorizonal, FileText, MessageSquareText, BriefcaseBusiness, ChevronDown } from 'lucide-react'; // Added BriefcaseBusiness, ChevronDown

// Dummy data for suggestions and quick actions
const suggestions = [
  { id: 1, text: 'Give me writing prompt', icon: FileText },
  { id: 2, text: 'Help me fix a specific issue', icon: MessageSquareText }, // Changed icon
  { id: 3, text: 'Let\'s map my business', icon: BriefcaseBusiness }, // Changed icon
];

const quickActions = [
  'Write a first Draft', 'Get Advice', 'Learn something new', 
  'Create an image', 'Make a plan', 'Brainstorming', 
  'Practice a language', 'Take a quick quiz'
];

const ChatInterface = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex-1 bg-white p-6 lg:p-10 rounded-l-3xl shadow-2xl flex flex-col h-full overflow-hidden"> {/* Ensure h-full and overflow-hidden on the direct child of flex container */}
      
      {/* Header */}
      <header className="flex justify-between items-start mb-8 lg:mb-12 flex-shrink-0">
        <div>
          <p className="text-sm text-slate-500">Good Morning</p>
          <h1 className="text-3xl font-semibold text-slate-800 tracking-tight">Sarah Joshia</h1>
          <p className="text-xs text-slate-400 mt-1">Today, 27 Oct 2024</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-150">
            <Cog size={20} />
          </button>
          <div className="flex items-center space-x-2 border border-slate-200 rounded-lg px-3 py-2 cursor-pointer hover:border-slate-300 hover:bg-slate-50 transition-all duration-150">
            {/* Proper flag icon would go here. Using emoji as placeholder. */}
            <span className="text-lg leading-none">🇬🇧</span> 
            <span className="text-sm font-medium text-slate-700">USA</span> 
            <ChevronDown size={16} className="text-slate-400" />
          </div>
        </div>
      </header>

      {/* Main Content Area - Scrollable */}
      <main className="flex-1 flex flex-col items-center justify-center text-center overflow-y-auto py-6 custom-scrollbar-chat">
        {/* This inner div helps with centering if content is short, and allows scrolling if long */}
        <div className="w-full max-w-3xl mx-auto">
            <button className="bg-blue-600 text-white text-[13px] font-medium px-6 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition-colors mb-8 transform hover:scale-105">
            Start Whatever it feels natural
            </button>

            <p className="text-4xl text-slate-600 font-light max-w-xl mx-auto mb-10 lg:mb-14 leading-tight">
            Tell me <span className="font-medium text-slate-800">your mind,</span><br className="hidden sm:block" /> or I can prompt you
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mb-12 lg:mb-16">
            {suggestions.map((suggestion) => {
                const Icon = suggestion.icon;
                return (
                <div 
                    key={suggestion.id} 
                    className="bg-slate-50/80 p-5 rounded-xl flex items-start space-x-3.5 cursor-pointer hover:bg-slate-100 transition-colors duration-150 border border-slate-200/70 hover:border-slate-300 transform hover:shadow-sm hover:-translate-y-0.5"
                >
                    <div className="bg-blue-100/70 p-2 rounded-lg">
                        <Icon size={18} className="text-blue-600 flex-shrink-0" />
                    </div>
                    <p className="text-[13px] text-slate-700 text-left font-medium pt-1">{suggestion.text}</p>
                </div>
                );
            })}
            </div>
        </div>
      </main>

      {/* Footer Input Area */}
      <footer className="mt-auto w-full max-w-3xl mx-auto pt-6 pb-2 flex-shrink-0"> {/* Added pb-2 for some breathing room */}
        <div className="relative flex items-center bg-slate-100 rounded-full p-1.5 shadow-sm border border-slate-200/90 mb-5 focus-within:ring-2 focus-within:ring-blue-400 focus-within:border-blue-400 transition-all duration-150">
          <Brain size={20} strokeWidth={1.8} className="text-slate-500 ml-3 mr-2 flex-shrink-0" />
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What's on your mind?..." 
            className="flex-grow bg-transparent text-sm text-slate-700 placeholder-slate-500/80 outline-none px-2 py-3"
          />
          <button 
            className={`bg-blue-600 text-white rounded-full p-2.5 hover:bg-blue-700 transition-all duration-200 mr-1 shadow-md transform ${inputValue ? 'scale-100 opacity-100' : 'scale-90 opacity-60'}`}
            disabled={!inputValue}
          >
            <SendHorizonal size={18} strokeWidth={2.2}/>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-xs">
          {quickActions.map((action, index) => (
            <button 
              key={index} 
              className="bg-slate-100/90 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-200/90 transition-colors duration-150 border border-slate-200/60 text-[11px] font-medium"
            >
              {action}
            </button>
          ))}
        </div>
      </footer>

       {/* Custom scrollbar style (optional) */}
       <style jsx global>{`
        .custom-scrollbar-chat::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar-chat::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar-chat::-webkit-scrollbar-thumb {
          background: #cbd5e1; // slate-300
          border-radius: 10px;
        }
        .custom-scrollbar-chat::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; // slate-500
        }
        .custom-scrollbar-chat {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 transparent; // slate-300
        }
      `}</style>
    </div>
  );
};

export default ChatInterface;
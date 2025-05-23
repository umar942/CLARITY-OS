import React from 'react'
import { Cog, Brain, SendHorizonal, FileText, MessageSquareText, BriefcaseBusiness, ChevronDown } from 'lucide-react'; // Added BriefcaseBusiness, ChevronDown
const Navbar = () => {
  return (
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
  )
}

export default Navbar
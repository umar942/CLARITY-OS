// Sidebar.jsx - Updated version with clickable Reflections title
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import earth from '../Images/earth.jpg'; 
import { 
  Home, 
  MessageSquare, 
  Settings, 
  SkipBack, 
  Star,
  SlidersHorizontal 
} from 'lucide-react';

const userAvatarPlaceholder = 'https://i.pravatar.cc/40?u=sheing'; 

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Sessions', path: '/sessions', icon: SlidersHorizontal }, 
  ];

  const reflectionContentItems = [
    { name: 'Setting', path: '/settings', icon: Settings, type: 'icon' },
    { name: 'Sheing', path: '/profile/sheing', avatar: userAvatarPlaceholder, type: 'avatar' },
  ];

  const sessions = [
    { id: 1, title: 'Apply To Leave For Emergency', date: '8, May Sunday', time: '12:00 pm', starred: true },
    { id: 2, title: 'Project Alpha Discussion', date: '7, May Saturday', time: '02:30 pm', starred: false },
    { id: 3, title: 'Client Meeting Notes', date: '6, May Friday', time: '10:00 am', starred: false },
    { id: 4, title: 'Team Sync - Sprint Planning', date: '5, May Thursday', time: '04:00 pm', starred: true },
    { id: 5, title: 'Review Design Mockups', date: '4, May Wednesday', time: '11:00 am', starred: false },
  ];

  const isActive = (path) => location.pathname === path;
  const isSessionActive = (sessionId) => location.pathname === `/session/${sessionId}`; 

  const baseDelay = 0.05; 
  const navItemsEndDelay = navItems.length * baseDelay;
  const sessionsHeaderDelay = navItemsEndDelay + baseDelay * 2;
  const reflectionTitleDelay = sessionsHeaderDelay + (sessions.length * baseDelay) + baseDelay * 3; 
  const reflectionContentStartDelay = reflectionTitleDelay + baseDelay * 2;

  return (
    <div 
      className="w-[280px] h-screen flex flex-col relative overflow-hidden border-r border-white/10"
      style={{
        backgroundImage: `url(${earth})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      
      <div className="relative z-10 flex flex-col h-full text-white">
        
        <div className="px-5 pt-6 pb-3 animate-fadeIn">
          <h1 className="text-xl font-medium text-white tracking-tight mb-1.5">
            Clarity OS
          </h1>
          <div className="h-px bg-white/15"></div>
        </div>

        <div className="px-2.5 py-1.5 space-y-0.5">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md group animate-slideIn border-l-4
                  ${active
                    ? 'border-l-[#1B59F8] bg-blue-500/10 text-[#1B59F8] shadow-sm'
                    : 'border-l-transparent text-neutral-300 hover:bg-white/10 hover:text-neutral-100'
                  }`}
                style={{ animationDelay: `${index * baseDelay}s` }}
              >
                <Icon className={`w-4 h-4 mr-2 flex-shrink-0 ${active ? 'text-[#1B59F8]' : 'text-neutral-400 group-hover:text-neutral-200'}`} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
        
        <div 
          className="flex-1 flex flex-col min-h-0 pt-2.5"
        >
          <div 
            className="px-5 pt-2 pb-1.5 animate-fadeIn"
            style={{ animationDelay: `${sessionsHeaderDelay}s`}}
          > 
            <div className="flex items-center justify-between">
              <h3 className="text-[10px] font-semibold  text-neutral-400 uppercase tracking-wider">
                Your Session
              </h3>
              <button className="text-blue-500   hover:text-blue-400 text-[10px] font-semibold transition-colors duration-200 px-1 py-0.5 rounded hover:bg-blue-600/10">
                Clear All
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-2.5 space-y-1 custom-scrollbar pb-2">
            {sessions.map((sessionItem, index) => { 
              const sessionPath = `/session/${sessionItem.id}`;
              const active = isSessionActive(sessionItem.id); 
              return (
                <Link
                  to={sessionPath} 
                  key={sessionItem.id} 
                  className={`block p-2 rounded-md group animate-slideUp transition-all duration-150
                    ${active 
                      ? 'bg-blue-600/20 border border-blue-500/30' 
                      : 'hover:bg-white/5'
                    }
                  `}
                  style={{ animationDelay: `${sessionsHeaderDelay + (index + 1) * baseDelay}s` }} 
                >
                  <div className="flex items-start text-xs text-neutral-300">
                    <Star className={`w-3 h-3 mr-1.5 mt-[1px] flex-shrink-0 transition-colors duration-150 ${sessionItem.starred ? 'text-yellow-400 fill-yellow-400/60' : 'text-neutral-600 group-hover:text-yellow-500/70'}`} />
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5 mt-[1px] text-neutral-500 group-hover:text-neutral-300 flex-shrink-0 transition-colors duration-150" />
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-[1px]">
                        <p className={`text-[10px] ${active ? 'text-neutral-100' : 'text-neutral-400 group-hover:text-neutral-300'}`}>{sessionItem.time}</p>
                        <p className={`text-[10px] ${active ? 'text-neutral-200' : 'text-neutral-500 group-hover:text-neutral-400'}`}>{sessionItem.date}</p>
                      </div>
                      <p className={`text-xs font-normal leading-tight truncate ${active ? 'text-white font-medium' : 'text-neutral-100 group-hover:text-white'}`}>
                        {sessionItem.title}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div> 
      
        <div> 
            <div 
            className="px-5 mt-1 mb-1.5 animate-fadeIn"
            style={{ animationDelay: `${reflectionTitleDelay}s` }}
            >
            <div className="h-px bg-white/15"></div>
            </div>

            {/* Made this section clickable */}
            <Link
              to="/reflection"
              className="px-5 pt-0.5 pb-1 flex items-center space-x-2 animate-fadeIn hover:bg-white/5 rounded-lg mx-2 transition-all duration-200 group"
              style={{ animationDelay: `${reflectionTitleDelay + baseDelay}s` }} 
            >
              <SkipBack className="w-[17px] h-[17px] text-neutral-300 group-hover:text-white flex-shrink-0 transition-colors duration-200" /> 
              <h2 className="text-lg font-medium text-neutral-100 group-hover:text-white tracking-tight transition-colors duration-200">
                  Reflections
              </h2>
            </Link>
        </div>
        
        <div 
            className="px-2.5 pt-1 pb-3 space-y-1.5"
        >
          {reflectionContentItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-2.5 space-x-3 rounded-full transition-all duration-200 group animate-slideUp
                bg-black/50 hover:bg-black/60 border border-neutral-600 hover:border-neutral-500/80 shadow-sm
                ${isActive(item.path) ? 'bg-neutral-700/50 border-blue-600/60' : ''}
              `}
              style={{ animationDelay: `${reflectionContentStartDelay + index * baseDelay}s` }}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200
                              ${item.type === 'icon' ? 'bg-neutral-600/80 group-hover:bg-neutral-500/90' : ''} 
                            `}>
                {item.type === 'icon' && item.icon && (
                  <item.icon className="w-4 h-4 text-neutral-100 group-hover:text-white" />
                )}
                {item.type === 'avatar' && item.avatar && (
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover ring-1 ring-white/10 group-hover:ring-white/20"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-normal text-neutral-200 group-hover:text-white truncate">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
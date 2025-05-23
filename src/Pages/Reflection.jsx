import React, { useState } from 'react';
import {
  User,
  Bell,
  Search,
  Filter,
  ChevronDown,
  UploadCloud,
  CheckSquare,
  Square,
  Grid,
  List,
  Sun, // Placeholder for toggle
  Flag, // Placeholder for flag
} from 'lucide-react';

// Dummy data for image cards
const initialImageItems = [
  { id: 1, imageUrl: 'https://via.placeholder.com/400x300/ADD8E6/000000?text=Image+1', name: 'Mountain View', size: '1.2MB', date: '27.10.2024', isSelected: true },
  { id: 2, imageUrl: 'https://via.placeholder.com/400x300/90EE90/000000?text=Image+2', name: 'Forest Trail', size: '850KB', date: '26.10.2024', isSelected: false },
  { id: 3, imageUrl: 'https://via.placeholder.com/400x300/FFB6C1/000000?text=Image+3', name: 'Beach Sunset', size: '2.1MB', date: '25.10.2024', isSelected: true },
  { id: 4, imageUrl: 'https://via.placeholder.com/400x300/E6E6FA/000000?text=Image+4', name: 'City Skyline', size: '1.5MB', date: '24.10.2024', isSelected: false },
  { id: 5, imageUrl: 'https://via.placeholder.com/400x300/dda0dd/000000?text=Image+5', name: 'Abstract Art', size: '970KB', date: '23.10.2024', isSelected: false },
  { id: 6, imageUrl: 'https://via.placeholder.com/400x300/FFD700/000000?text=Image+6', name: 'Desert Dunes', size: '1.8MB', date: '22.10.2024', isSelected: false },
  { id: 7, imageUrl: 'https://via.placeholder.com/400x300/87CEEB/000000?text=Image+7', name: 'Winter Lake', size: '2.0MB', date: '21.10.2024', isSelected: true },
  { id: 8, imageUrl: 'https://via.placeholder.com/400x300/32CD32/000000?text=Image+8', name: 'Wildlife Shot', size: '1.1MB', date: '20.10.2024', isSelected: false },
];

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-6 md:px-8 border-b border-gray-200">
      <div>
        <p className="text-sm text-gray-600">Good Morning</p>
        <h1 className="text-xl font-semibold text-gray-800">Sarah Joshia</h1>
        <p className="text-xs text-gray-500">Today, 27 Oct 2024</p>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-blue-500 text-white px-6 py-2.5 rounded-t-md text-sm font-medium focus:outline-none">
          Your Reflections
        </button>
        {/* Add other tabs here if needed, e.g.,
        <button className="text-gray-600 hover:text-blue-500 px-4 py-2.5 text-sm font-medium focus:outline-none">
          Other Tab
        </button>
        */}
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
          <Sun size={20} /> {/* Placeholder for toggle */}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 flex items-center space-x-1">
          <Flag size={20} /> {/* Placeholder for USA flag */}
          <span className="text-xs font-medium">USA</span>
        </button>
        <button className="p-1.5 rounded-full hover:bg-gray-100">
          <img src="https://i.pravatar.cc/32" alt="User" className="w-8 h-8 rounded-full" />
        </button>
      </div>
    </div>
  );
};

const ControlsBar = ({ itemCount, onSelectAll, allSelected }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 md:px-8">
      <div className="flex items-center space-x-3">
        <button className="flex items-center bg-blue-500 text-white px-4 py-2.5 rounded-md text-sm hover:bg-blue-600 transition-colors">
          Any Date <ChevronDown size={16} className="ml-2" />
        </button>
        <button className="flex items-center bg-white text-gray-700 px-4 py-2.5 rounded-md border border-gray-300 text-sm hover:bg-gray-50 transition-colors">
          All type <ChevronDown size={16} className="ml-2" />
        </button>
      </div>

      <div className="flex items-center space-x-3">
        <label htmlFor="selectAll" className="flex items-center space-x-2 cursor-pointer">
          <input 
            type="checkbox" 
            id="selectAll" 
            checked={allSelected}
            onChange={onSelectAll}
            className="form-checkbox h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-400" 
          />
          <span className="text-sm text-gray-700">Files ({itemCount})</span>
        </label>
      </div>

      <div className="flex-grow md:flex-grow-0 md:w-72 relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button className="flex items-center bg-blue-500 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
        <UploadCloud size={18} className="mr-2" />
        Upload Documents
      </button>
    </div>
  );
};

const ImageCard = ({ item, onToggleSelect }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 relative transition-all hover:shadow-md">
      <div className="absolute top-3 left-3">
        <input 
            type="checkbox" 
            checked={item.isSelected}
            onChange={() => onToggleSelect(item.id)}
            className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400 cursor-pointer"
        />
      </div>
      
      <img 
        src={item.imageUrl} 
        alt={item.name} 
        className="w-full h-40 object-cover rounded-md mb-3" 
      />
      
      <h3 className="text-sm font-medium text-gray-800 truncate mb-1">{item.name}</h3>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{item.size}</span>
        <span>{item.date}</span>
      </div>
    </div>
  );
};


const ReflectionsPage = () => {
  const [imageItems, setImageItems] = useState(initialImageItems);

  const handleToggleSelect = (id) => {
    setImageItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const allSelected = imageItems.length > 0 && imageItems.every(item => item.isSelected);

  const handleSelectAll = () => {
    const newSelectedState = !allSelected;
    setImageItems(prevItems =>
      prevItems.map(item => ({ ...item, isSelected: newSelectedState }))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ControlsBar 
        itemCount={imageItems.length}
        onSelectAll={handleSelectAll}
        allSelected={allSelected}
      />

      <div className="px-6 md:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {imageItems.map(item => (
            <ImageCard 
              key={item.id} 
              item={item}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReflectionsPage;
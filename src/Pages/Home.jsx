import React from 'react';
import { MessageSquare, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex-1 bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Welcome to Clarity OS
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your intelligent AI companion powered by advanced language models. 
            Experience the future of conversational AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <MessageSquare className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Conversations</h3>
            <p className="text-gray-400">
              Engage in natural, context-aware conversations with our advanced AI model.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <Zap className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Get instant responses with optimized performance and minimal latency.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <Shield className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-400">
              Your conversations are protected with enterprise-grade security.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/chat"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Start Chatting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
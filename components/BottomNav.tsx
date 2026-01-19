import React from 'react';
import { NAV_ITEMS } from '../constants';

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0F0F1A]/80 backdrop-blur-xl border-t border-white/5 px-6 pt-3 pb-8 flex justify-between items-center z-50">
      {NAV_ITEMS.map((item) => (
        <button 
          key={item.id} 
          className={`flex flex-col items-center transition-colors ${
            item.id === 'home' ? 'text-[#32E07E]' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          {item.icon}
          {item.id === 'ai' ? (
            <span className="text-[10px] font-black mt-0.5">AI</span>
          ) : null}
        </button>
      ))}
    </div>
  );
};

export default BottomNav;

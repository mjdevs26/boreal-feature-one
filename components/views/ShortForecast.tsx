
import React from 'react';
import StatCard from '../StatCard';

const ShortForecast: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-slate-400 text-sm font-medium">Predicción Actual</h3>
          <p className="text-xs text-[#32E07E]">Reykjavík, IS</p>
        </div>
        <div className="bg-[#32E07E]/10 px-3 py-1 rounded-full">
          <span className="text-[#32E07E] text-xs font-bold">LIVE</span>
        </div>
      </div>

      {/* Probability Circle */}
      <div className="relative flex justify-center py-4">
        <div className="w-48 h-48 rounded-full border-[10px] border-slate-800 flex flex-col items-center justify-center relative overflow-hidden">
          {/* Inner Glow/Gradient mimicking Aurora */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#32E07E]/20 to-transparent blur-xl"></div>
          <span className="text-5xl font-black text-white z-10">42%</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest z-10">Prob. Cenital</span>
        </div>
        
        {/* Horizon prob */}
        <div className="absolute top-0 right-0 bg-[#1E1E2E] border border-white/5 p-3 rounded-2xl shadow-xl">
           <span className="block text-[8px] text-slate-500 uppercase">Horizonte</span>
           <span className="text-lg font-bold text-[#32E07E]">68%</span>
        </div>
      </div>

      {/* Solar Wind Grid */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[10px] text-slate-500 uppercase tracking-widest ml-1">Viento Solar (DSCOVR)</h4>
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Velocidad" value={680} unit="km/s" />
          <StatCard label="Densidad" value={12.4} unit="p/cm³" />
          <StatCard label="Bz" value={-9.2} unit="nT" color="#FF5E5E" />
          <StatCard label="Bt" value={11.5} unit="nT" />
        </div>
      </div>

      {/* Kp & Clouds */}
      <div className="grid grid-cols-2 gap-4 mt-auto">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 uppercase">Valor Kp</span>
          <span className="text-3xl font-bold text-[#32E07E]">Kp 4</span>
          <span className="text-[10px] text-slate-400 italic">Moderate Activity</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] text-slate-500 uppercase">Nubes</span>
          <span className="text-3xl font-bold text-white">26%</span>
          <span className="text-[10px] text-slate-400">Mostly Clear</span>
        </div>
      </div>
    </div>
  );
};

export default ShortForecast;

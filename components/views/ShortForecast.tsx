
import React from 'react';
import { Wind, Waves, Zap, Magnet, Gauge, Cloud, MapPin, Radio } from 'lucide-react';
import StatCard from '../StatCard';

const ShortForecast: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 h-full">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-slate-400 text-sm font-medium flex items-center gap-1.5">
            Predicción Actual
          </h3>
          <p className="text-xs text-[#32E07E] flex items-center gap-1">
            <MapPin size={10} />
            Reykjavík, IS
          </p>
        </div>
      </div>

      {/* Probability Circle */}
      <div className="relative flex justify-center py-4">
        <div className="w-48 h-48 rounded-full border-[10px] border-slate-800/50 flex flex-col items-center justify-center relative overflow-hidden shadow-[inset_0_0_40px_rgba(50,224,126,0.1)]">
          {/* Inner Glow/Gradient mimicking Aurora */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#32E07E]/10 to-transparent blur-2xl"></div>
          <span className="text-5xl font-black text-white z-10">42%</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest z-10 flex items-center gap-1">
            Prob
          </span>
        </div>
      </div>

      {/* Solar Wind Grid */}
      <div className="flex flex-col gap-3">
        <h4 className="text-[10px] text-slate-500 uppercase tracking-widest ml-1 font-bold flex items-center gap-2">
          Viento Solar
        </h4>
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Velocidad" value={680} unit="km/s" icon={<Wind size={16} />} />
          <StatCard label="Densidad" value={12.4} unit="p/cm³" icon={<Waves size={16} />} />
          <StatCard label="Bz" value={-9.2} unit="nT" color="#FF5E5E" icon={<Zap size={16} />} />
          <StatCard label="Bt" value={11.5} unit="nT" icon={<Magnet size={16} />} />
        </div>
      </div>

      {/* Kp & Clouds */}
      <div className="grid grid-cols-2 gap-4 mt-auto pt-4 border-t border-white/5">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] text-slate-500 uppercase flex items-center gap-1">
            <Gauge size={12} />
            Valor Kp
          </span>
          <span className="text-3xl font-black text-[#32E07E]">Kp 4</span>
          <span className="text-[10px] text-slate-400 italic">Actividad Moderada</span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] text-slate-500 uppercase flex items-center gap-1">
            <Cloud size={12} />
            Nubes
          </span>
          <span className="text-3xl font-black text-white">26%</span>
          <span className="text-[10px] text-slate-400">Mayormente despejado</span>
        </div>
      </div>
    </div>
  );
};

export default ShortForecast;

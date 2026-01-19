
import React from 'react';
import { Cloud, Clock, ChevronRight } from 'lucide-react';
import { MOCK_KP_LONG } from '../../constants';

const LongForecast: React.FC = () => {
  const getKpColor = (kp: number) => {
    if (kp >= 5) return 'bg-[#FF5E5E]';
    if (kp >= 4) return 'bg-[#F9CE1D]';
    return 'bg-[#32E07E]';
  };

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-3 pr-1">
        {MOCK_KP_LONG.map((item, idx) => (
          <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-300 group">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#32E07E] font-black tracking-widest">{item.label}</span>
              <span className="text-sm font-bold text-slate-300 flex items-center gap-1.5">
                <Clock size={12} className="text-slate-500" />
                {item.time}
              </span>
            </div>
            
            <div className="flex-1 px-6">
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getKpColor(item.value)} shadow-[0_0_12px_rgba(50,224,126,0.3)] transition-all duration-500`}
                  style={{ width: `${(item.value / 9) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="text-[10px] text-slate-500 uppercase font-bold mb-0.5">KP</span>
                <span className="text-base font-black text-white">{item.value}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold mb-0.5 flex items-center gap-1">
                   <Cloud size={10} />
                   Cielo
                </span>
                <span className="text-sm font-bold text-slate-300">{item.clouds}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LongForecast;

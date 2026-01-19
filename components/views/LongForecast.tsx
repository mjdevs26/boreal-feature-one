
import React from 'react';
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
          <div key={idx} className="bg-white/5 rounded-xl p-3 flex items-center justify-between hover:bg-white/10 transition-colors">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#32E07E] font-bold">{item.label}</span>
              <span className="text-sm font-medium text-slate-300">{item.time}</span>
            </div>
            
            <div className="flex-1 px-4">
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getKpColor(item.value)} shadow-[0_0_8px_rgba(50,224,126,0.5)]`}
                  style={{ width: `${(item.value / 9) * 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center min-w-[32px]">
                <span className="text-xs font-bold text-white">Kp {item.value}</span>
              </div>
              <div className="flex flex-col items-end min-w-[40px]">
                <span className="text-[10px] text-slate-500 uppercase">Nubes</span>
                <span className="text-xs font-medium">{item.clouds}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-white/5 py-3 rounded-xl border border-white/5 text-xs font-medium text-slate-400 hover:text-white transition-colors">
        Ver pronóstico completo
      </button>
    </div>
  );
};

export default LongForecast;

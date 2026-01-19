
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { MOCK_POWER } from '../../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1E1E2E] border border-white/10 p-3 rounded-xl shadow-2xl backdrop-blur-md">
        <p className="text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">{label}</p>
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#32E07E]"></div>
              <span className="text-xs text-slate-300">Hem. Norte</span>
            </div>
            <span className="text-xs font-bold text-[#32E07E]">{payload[0].value.toFixed(1)} GW</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F9CE1D]"></div>
              <span className="text-xs text-slate-300">Hem. Sur</span>
            </div>
            <span className="text-xs font-bold text-[#F9CE1D]">{payload[1].value.toFixed(1)} GW</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const PowerGraph: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-slate-200 text-lg font-bold">Hemispheric Power</h3>
          <p className="text-xs text-slate-500">Energía depositada en tiempo real (GW)</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#32E07E]"></div>
            <span className="text-[9px] text-slate-400 uppercase font-bold">Norte</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#F9CE1D]"></div>
            <span className="text-[9px] text-slate-400 uppercase font-bold">Sur</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[320px] -ml-4">
        {/* Threshold indicator label */}
        <div className="absolute top-[28%] right-2 z-10">
           <span className="text-[8px] font-bold text-[#FF5E5E]/60 uppercase tracking-tighter bg-[#0F0F1A] px-1">Threshold Active</span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_POWER} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorNorth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#32E07E" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#32E07E" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSouth" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F9CE1D" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#F9CE1D" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ffffff08" />
            <XAxis 
                dataKey="timestamp" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748B', fontSize: 9}} 
                interval={5}
                dy={10}
            />
            <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#64748B', fontSize: 9}}
                domain={[0, 'auto']}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#ffffff20', strokeWidth: 1 }} />
            
            {/* Critical Activity Threshold Line */}
            <ReferenceLine y={50} stroke="#FF5E5E" strokeDasharray="3 3" strokeOpacity={0.3} label={{ position: 'insideTopLeft', value: '50GW', fill: '#FF5E5E', fontSize: 8, opacity: 0.5 }} />

            {/* South Hemisphere Area */}
            <Area 
                type="monotone" 
                dataKey="south" 
                stroke="#F9CE1D" 
                fillOpacity={1} 
                fill="url(#colorSouth)" 
                strokeWidth={2}
                strokeDasharray="5 5"
                animationDuration={2000}
            />
            
            {/* North Hemisphere Area (Primary) */}
            <Area 
                type="monotone" 
                dataKey="north" 
                stroke="#32E07E" 
                fillOpacity={1} 
                fill="url(#colorNorth)" 
                strokeWidth={3}
                activeDot={{ r: 6, stroke: '#0F0F1A', strokeWidth: 2, fill: '#32E07E' }}
                animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col gap-1 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#32E07E] opacity-50"></div>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Pico Norte</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">45.2</span>
            <span className="text-[10px] text-[#32E07E] font-bold">GW</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-[#32E07E] w-[45%] rounded-full shadow-[0_0_10px_#32E07E50]"></div>
          </div>
        </div>

        <div className="bg-white/5 border border-white/5 p-4 rounded-2xl flex flex-col gap-1 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-[#F9CE1D] opacity-50"></div>
          <span className="text-[10px] text-slate-500 uppercase tracking-widest">Pico Sur</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-black text-white">38.7</span>
            <span className="text-[10px] text-[#F9CE1D] font-bold">GW</span>
          </div>
          <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-[#F9CE1D] w-[38%] rounded-full shadow-[0_0_10px_#F9CE1D50]"></div>
          </div>
        </div>
      </div>

      <div className="bg-[#32E07E]/5 border border-[#32E07E]/10 p-4 rounded-2xl">
        <p className="text-[11px] text-[#32E07E]/80 text-center leading-relaxed font-medium">
          La actividad hemisférica muestra una tendencia <span className="font-bold underline">ascendente</span> en las últimas 4 horas. Condiciones óptimas para observación cenital si el Bz se mantiene negativo.
        </p>
      </div>
    </div>
  );
};

export default PowerGraph;

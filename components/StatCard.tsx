
import React from 'react';

interface StatCardProps {
  label: string;
  value: string | number;
  unit?: string;
  color?: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, unit, color = '#32E07E' }) => {
  return (
    <div className="bg-[#1E1E2E]/60 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center backdrop-blur-md">
      <span className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">{label}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-bold" style={{ color }}>{value}</span>
        {unit && <span className="text-[10px] text-slate-500">{unit}</span>}
      </div>
    </div>
  );
};

export default StatCard;


import React from 'react';
import { Camera, Zap, BarChart3 } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { label: 'Fotografía', icon: <Camera size={28} />, count: 12 },
    { label: 'Auroras', icon: <Zap size={28} />, active: true },
    { label: 'Predicción', icon: <BarChart3 size={28} /> },
  ];

  return (
    <div className="px-6 py-4 flex flex-col gap-4">
      <h3 className="text-slate-200 font-bold uppercase tracking-wider text-xs">¿Cazamos Auroras?</h3>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action, i) => (
          <button 
            key={i}
            className={`flex flex-col items-center justify-center aspect-square rounded-3xl transition-all ${
              action.active 
              ? 'bg-gradient-to-br from-[#32E07E] to-[#1DAA61] text-white shadow-lg shadow-[#32E07E]/20' 
              : 'bg-[#1E1E2E] text-slate-400 border border-white/5'
            }`}
          >
            {action.icon}
            <span className="text-[10px] font-medium mt-2">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;

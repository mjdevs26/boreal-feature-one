
import React from 'react';
import { ChevronLeft, MapPin } from 'lucide-react';
import ForecastList from './components/ForecastList';
import QuickActions from './components/QuickActions';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto relative min-h-screen pb-24 overflow-y-auto no-scrollbar selection:bg-[#32E07E]/30 bg-[#0F0F1A]">
      
      {/* Updated Header */}
      <header className="p-6 flex items-center justify-between sticky top-0 bg-[#0F0F1A]/80 backdrop-blur-lg z-40">
        <button className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors group">
          <ChevronLeft size={24} className="group-hover:-translate-x-0.5 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>
        
        <h2 className="absolute left-1/2 -translate-x-1/2 text-lg font-medium text-white tracking-wide">
          Predicción
        </h2>
        
        {/* Spacer to maintain layout balance */}
        <div className="w-16"></div>
      </header>


      {/* Main Forecast List View */}
      <section className="mt-4">
        <ForecastList />
      </section>

      {/* Navigation */}
      <BottomNav />
    </div>
  );
};

export default App;

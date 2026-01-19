
import React from 'react';
import { Bell, Search, MapPin } from 'lucide-react';
import ForecastList from './components/ForecastList';
import QuickActions from './components/QuickActions';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <div className="max-w-md mx-auto relative min-h-screen pb-24 overflow-y-auto no-scrollbar selection:bg-[#32E07E]/30 bg-[#0F0F1A]">
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center sticky top-0 bg-[#0F0F1A]/80 backdrop-blur-lg z-40">
        <div className="flex flex-col">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Boreal Expedition
          </span>
          <div className="flex items-center gap-1 text-[10px] text-slate-500">
            <MapPin size={10} />
            <span>Actualizado hace 2 min</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-2.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
            <Search size={20} />
          </button>
          <button className="p-2.5 rounded-full bg-white/5 text-slate-300 border border-white/10 relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#32E07E] rounded-full ring-2 ring-[#0F0F1A]"></span>
          </button>
        </div>
      </header>

      {/* Greeting Section */}
      <section className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-black text-white leading-tight">
              ¡Hola <span className="text-[#32E07E]">Jesús!</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-[200px]">
              Prepárate para vivir la aventura de tu vida.
            </p>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-[#32E07E] p-1 shadow-lg shadow-[#32E07E]/20">
            <img 
              src="https://picsum.photos/id/64/150/150" 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Categories Tab-like buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#32E07E] to-[#1DAA61] text-white font-bold text-sm shadow-lg shadow-[#32E07E]/20">
            Ruta
          </button>
          <button className="px-6 py-2 rounded-xl bg-transparent text-slate-400 font-medium text-sm hover:text-white transition-colors">
            Tours
          </button>
          <button className="px-6 py-2 rounded-xl bg-transparent text-slate-400 font-medium text-sm hover:text-white transition-colors">
            Comunidad
          </button>
        </div>
      </section>

      {/* Main Forecast List View */}
      <section className="mt-4">
        <ForecastList />
      </section>

      {/* Quick Action Grid */}
      <section>
        <QuickActions />
      </section>

      {/* Featured Location Card */}
      <section className="px-6 pb-8">
        <div className="relative rounded-[32px] overflow-hidden group cursor-pointer">
          <img 
            src="https://picsum.photos/id/10/800/400" 
            alt="Snæfellsnes" 
            className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] via-[#0F0F1A]/20 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div>
              <h4 className="text-xl font-bold text-white">Snæfellsnes</h4>
              <p className="text-[#32E07E] font-medium text-sm">Día 1</p>
            </div>
            <button className="bg-[#32E07E] px-4 py-2 rounded-lg text-xs font-bold text-[#0F0F1A] hover:bg-white transition-colors">
              Leer más
            </button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <BottomNav />
    </div>
  );
};

export default App;

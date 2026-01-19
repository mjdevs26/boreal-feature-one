
import React, { useState } from 'react';
import ShortForecast from './views/ShortForecast';
import LongForecast from './views/LongForecast';
import PowerGraph from './views/PowerGraph';

const ForecastCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    <ShortForecast key="short" />,
    <LongForecast key="long" />,
    <PowerGraph key="power" />
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Indicator dots */}
      <div className="flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? 'w-8 bg-[#32E07E]' : 'w-1.5 bg-slate-700'
            }`}
          />
        ))}
      </div>

      {/* Horizontal Scroll Area */}
      <div
        className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        onScroll={handleScroll}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full snap-center px-4">
            <div className="glass rounded-[32px] overflow-hidden p-6 min-h-[500px]">
              {slide}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCarousel;

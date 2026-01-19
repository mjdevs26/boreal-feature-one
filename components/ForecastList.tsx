
import React from 'react';
import ShortForecast from './views/ShortForecast';
import LongForecast from './views/LongForecast';
import PowerGraph from './views/PowerGraph';

const ForecastList: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 px-4 pb-4">
      {/* Short Forecast Section */}
      <div className="glass rounded-[32px] overflow-hidden p-6">
        <ShortForecast />
      </div>

      {/* Long Forecast Section */}
      <div className="glass rounded-[32px] overflow-hidden p-6">
        <div className="mb-4">
          <h3 className="text-slate-200 text-lg font-bold">Pronóstico Extendido</h3>
          <p className="text-xs text-slate-500">K-Index y cobertura nubosa</p>
        </div>
        <LongForecast />
      </div>

      {/* Power Graph Section */}
      <div className="glass rounded-[32px] overflow-hidden p-6">
        <PowerGraph />
      </div>
    </div>
  );
};

export default ForecastList;


// Added React import to resolve 'Cannot find namespace React' error
import React from 'react';

export interface SolarWind {
  speed: number;
  density: number;
  bz: number;
  bt: number;
}

export interface KpData {
  time: string;
  value: number;
  clouds: number;
  label: string;
}

export interface HemisphericPower {
  timestamp: string;
  north: number;
  south: number;
}

export enum ForecastType {
  SHORT = 'SHORT',
  LONG = 'LONG',
  GRAPH = 'GRAPH'
}

export interface NavigationItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

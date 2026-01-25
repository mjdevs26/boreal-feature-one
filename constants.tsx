
import React from 'react';
import { Home, Compass, User, MessageCircle, Cpu } from 'lucide-react';
import { KpData, HemisphericPower, NavigationItem } from './types';

export const COLORS = {
  bg: '#0F0F1A',
  card: '#1E1E2E',
  accent: '#32E07E',
  accentDark: '#1DAA61',
  textSecondary: '#94A3B8'
};

export const MOCK_KP_LONG: KpData[] = [
  { time: '00-03h', value: 4, clouds: 100, label: 'HOY' },
  { time: '03-06h', value: 3, clouds: 95, label: 'HOY' },
  { time: '06-09h', value: 3, clouds: 66, label: 'HOY' },
  { time: '09-12h', value: 3, clouds: 4, label: 'HOY' },
  { time: '12-15h', value: 3, clouds: 29, label: 'HOY' },
  { time: '15-18h', value: 4, clouds: 99, label: 'HOY' },
  { time: '18-21h', value: 2, clouds: 94, label: 'HOY' },
  { time: '21-00h', value: 5, clouds: 31, label: 'MAÑANA' },
  { time: '00-03h', value: 5, clouds: 80, label: 'MAÑANA' },
  { time: '03-06h', value: 4, clouds: 45, label: 'MAÑANA' },
];

export const MOCK_POWER: HemisphericPower[] = Array.from({ length: 24 }).map((_, i) => ({
  timestamp: `${i}:00`,
  north: 15 + Math.random() * 30,
  south: 10 + Math.random() * 25
}));

export const NAV_ITEMS: NavigationItem[] = [
  { id: 'home', icon: <Home size={24} />, label: 'Inicio' },
  { id: 'explore', icon: <Compass size={24} />, label: 'Explorar' },
  { id: 'profile', icon: <User size={24} />, label: 'Perfil' },
  { id: 'chat', icon: <MessageCircle size={24} />, label: 'Chat' },
  { id: 'ai', icon: <Cpu size={24} />, label: 'AI' }
];

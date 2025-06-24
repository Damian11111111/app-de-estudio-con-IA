
import React from 'react';
import { HomeIcon } from './components/icons/HomeIcon'; 
import { BookOpenIcon as StitchBookOpenIcon } from './components/icons/BookOpenIcon'; // Represents Study Hub
import { CogIcon } from './components/icons/CogIcon'; // Icon for Settings

export interface NavItem {
  path: string;
  name: string; 
  icon: React.ReactElement<{ className?: string }>;
}

export const NAVIGATION_ITEMS: NavItem[] = [
  { path: '/dashboard', name: 'Inicio', icon: <HomeIcon className="w-6 h-6" /> }, 
  { path: '/study-hub', name: 'Study Hub', icon: <StitchBookOpenIcon className="w-6 h-6" /> }, 
  { path: '/settings', name: 'Ajustes', icon: <CogIcon className="w-6 h-6" /> },
];

export const APP_NAME = "Estud-IA"; // Corrected name

export const DEFAULT_POMODORO_SETTINGS = {
  workDuration: 25,
  shortBreakDuration: 5,
  longBreakDuration: 15,
  cyclesBeforeLongBreak: 4,
};

export const GEMINI_TEXT_MODEL = "gemini-2.5-flash-preview-04-17";
export const GEMINI_IMAGE_MODEL = "imagen-3.0-generate-002";
    
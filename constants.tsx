
import React from 'react';

export const COLORS = {
  primary: '#10b981', // Emerald 500
  secondary: '#3b82f6', // Blue 500
  accent: '#f59e0b', // Amber 500
  danger: '#ef4444', // Red 500
};

export const COMPARISON_DATA = [
  { method: 'Walking', time: 45, cost: 0, freedom: 40 },
  { method: 'Bus', time: 30, cost: 80, freedom: 20 },
  { method: 'Car Ride', time: 15, cost: 120, freedom: 10 },
  { method: 'E-Bike', time: 12, cost: 5, freedom: 95 },
];

export const CONCERNS: { concern: string; solution: string; icon: string }[] = [
  {
    concern: "Safety & Traffic",
    solution: "I will use Dutch cycling paths, wear a certified MIPS helmet, and share my live location via Google Maps.",
    icon: "🛡️"
  },
  {
    concern: "Upfront Cost",
    solution: "I've saved €400 from chores and birthdays, and I'm happy to help with more work to cover the rest.",
    icon: "💰"
  },
  {
    concern: "Theft Risk",
    solution: "I will use two locks (ART-2 certified) and store it in the shed every single night.",
    icon: "🔒"
  },
  {
    concern: "Responsibility",
    solution: "I will personally manage the weekly maintenance, including tire checks and chain cleaning.",
    icon: "🔧"
  }
];

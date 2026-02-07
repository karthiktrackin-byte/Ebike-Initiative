
import React from 'react';

const SafetyFeature = ({ icon, title, text }: { icon: string, title: string, text: string }) => (
  <div className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
    <div className="text-4xl">{icon}</div>
    <div>
      <h4 className="font-bold text-slate-800 text-lg mb-1">{title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

export const SafetySection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <SafetyFeature 
        icon="🪖" 
        title="High-Spec Safety Gear" 
        text="I will wear a certified MIPS-equipped helmet on every single ride, no exceptions. Visible gear will be used at night." 
      />
      <SafetyFeature 
        icon="🚦" 
        title="Strict Law Adherence" 
        text="Following all traffic signals and riding exclusively on designated bike lanes. Zero phone usage while riding." 
      />
      <SafetyFeature 
        icon="📍" 
        title="Live Location Tracking" 
        text="I will keep my location shared with you both during school commutes and extracurricular trips for your peace of mind." 
      />
      <SafetyFeature 
        icon="🚲" 
        title="Maintenance Log" 
        text="A weekly digital log checking brakes, tire pressure, and lights will be maintained and shared with you." 
      />
    </div>
  );
};

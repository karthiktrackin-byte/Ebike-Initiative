
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { COMPARISON_DATA, COLORS } from '../constants';

export const ComparisonChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Commute Performance Breakdown</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={COMPARISON_DATA}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="method" />
          <YAxis />
          <Tooltip 
            cursor={{fill: '#f1f5f9'}}
            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Legend />
          <Bar name="Time (min)" dataKey="time" fill={COLORS.secondary} radius={[4, 4, 0, 0]} />
          <Bar name="Freedom Index (%)" dataKey="freedom" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

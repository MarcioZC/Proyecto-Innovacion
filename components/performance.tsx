'use client'; // Necesario para componentes que usan hooks o Recharts
import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

interface ChartData {
  name: string;
  value: number;
}

interface PerformanceChartProps {
  data: ChartData[];
  title: string;
  currentValue: string;
  change: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-lg text-xs">
        <p className="text-gray-500">{label}</p>
        <p className="text-gray-800 font-medium">{`Valor: $${payload[0].value.toLocaleString('en-US')}`}</p>
      </div>
    );
  }
  return null;
};

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data, title, currentValue, change }) => {
  return (
    // Estilo de tarjeta de Google Material Design
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-shadow hover:shadow-xl flex-1 min-w-[300px] max-w-full md:max-w-xl">
      <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-4xl font-extrabold text-gray-900 mt-2">{currentValue}</p>
      <p className="text-sm text-green-600 font-medium flex items-center mb-6">
        <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
        {change}
      </p>

      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barCategoryGap="20%">
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs text-gray-500" />
            <Tooltip content={<CustomTooltip />} />
            {/* Barra azul de Google, con esquinas redondeadas */}
            <Bar dataKey="value" fill="#4285F4" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
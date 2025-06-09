import React from 'react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ChartContainer } from '../ui/ChartContainer';
import type { ChartProps, PerformanceMetricsData } from '@/types';

export const PerformanceRadarChart: React.FC<ChartProps<PerformanceMetricsData>> = ({ 
  data, 
  title = "Sales Performance Metrics",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <PolarGrid stroke="#e5e7eb" />
        <PolarAngleAxis 
          dataKey="metric" 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          className="text-xs"
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 100]} 
          tick={{ fontSize: 10, fill: '#6b7280' }}
          tickFormatter={(value) => `${value}%`}
        />
        <Radar 
          name="Current Performance" 
          dataKey="value" 
          stroke="#3b82f6" 
          fill="#3b82f6" 
          fillOpacity={0.3}
          strokeWidth={2}
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
        />
        <Radar 
          name="Target" 
          dataKey="target" 
          stroke="#10b981" 
          fill="#10b981" 
          fillOpacity={0.1}
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
        />
        <Tooltip 
          formatter={(value: number, name: string) => [`${value}%`, name]}
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  </ChartContainer>
);
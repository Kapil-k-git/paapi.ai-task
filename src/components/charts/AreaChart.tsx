import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer} from '../ui/ChartContainer'
import { formatCurrency } from '@/utils/helpers';
import type { ChartProps, CumulativeGrowthData } from '@/types';

export const GrowthAreaChart: React.FC<ChartProps<CumulativeGrowthData>> = ({ 
  data, 
  title = "Cumulative Sales Growth",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="month" 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickLine={{ stroke: '#e5e7eb' }}
          axisLine={{ stroke: '#e5e7eb' }}
        />
        <YAxis 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickLine={{ stroke: '#e5e7eb' }}
          axisLine={{ stroke: '#e5e7eb' }}
          tickFormatter={(value: number) => `$${(value/1000).toFixed(0)}K`}
        />
        <Tooltip 
          formatter={(value: number, name: string) => [formatCurrency(value), name]}
          labelStyle={{ color: '#374151', fontWeight: 'medium' }}
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="previous" 
          stackId="1" 
          stroke="#94a3b8" 
          fillOpacity={1}
          fill="url(#colorPrevious)"
          name="Previous Year"
        />
        <Area 
          type="monotone" 
          dataKey="current" 
          stackId="2" 
          stroke="#3b82f6" 
          fillOpacity={1}
          fill="url(#colorCurrent)"
          name="Current Year"
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartContainer>
);
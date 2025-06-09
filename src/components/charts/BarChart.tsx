import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer } from '../ui/ChartContainer';
import { formatCurrency } from '@/utils/helpers';
import type { ChartProps, MonthlyRevenueData } from '@/types';

export const SalesBarChart: React.FC<ChartProps<MonthlyRevenueData>> = ({ 
  data, 
  title = "Monthly Revenue vs Target",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
          tickFormatter={(value: number) => `${(value/1000).toFixed(0)}K`}
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
        <Bar 
          dataKey="revenue" 
          fill="#3b82f6" 
          name="Revenue"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="target" 
          fill="#10b981" 
          name="Target"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

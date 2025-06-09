import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { ChartContainer } from '../ui/ChartContainer';
import { formatNumber } from '@/utils/helpers';
import type { ChartProps, SalesTrendsData } from '@/types';

export const SalesLineChart: React.FC<ChartProps<SalesTrendsData>> = ({ 
  data, 
  title = "Sales Trends Over Time",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickLine={{ stroke: '#e5e7eb' }}
          axisLine={{ stroke: '#e5e7eb' }}
        />
        <YAxis 
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickLine={{ stroke: '#e5e7eb' }}
          axisLine={{ stroke: '#e5e7eb' }}
          tickFormatter={(value: number) => formatNumber(value)}
        />
        <Tooltip 
          formatter={(value: number, name: string) => [formatNumber(value), name]}
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
        <Line 
          type="monotone" 
          dataKey="sales" 
          stroke="#3b82f6" 
          strokeWidth={3}
          name="Sales"
          dot={{ fill: '#3b82f6', strokeWidth: 2, r: 5 }}
          activeDot={{ 
            r: 7, 
            stroke: '#3b82f6', 
            strokeWidth: 2,
            fill: '#fff'
          }}
        />
        <Line 
          type="monotone" 
          dataKey="leads" 
          stroke="#10b981" 
          strokeWidth={3}
          name="Leads"
          dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }}
          activeDot={{ 
            r: 7, 
            stroke: '#10b981', 
            strokeWidth: 2,
            fill: '#fff'
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

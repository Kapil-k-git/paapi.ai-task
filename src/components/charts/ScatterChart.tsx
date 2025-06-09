import React from 'react';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ZAxis 
} from 'recharts';
import { ChartContainer } from '../ui/ChartContainer';
import { formatCurrency, formatNumber } from '@/utils/helpers';
import type { ChartProps, PriceVsUnitsData } from '@/types';

export const PriceScatterChart: React.FC<ChartProps<PriceVsUnitsData>> = ({ 
  data, 
  title = "Price vs Units Sold",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis 
          dataKey="price" 
          name="Price" 
          unit="$"
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickLine={{ stroke: '#e5e7eb' }}
          axisLine={{ stroke: '#e5e7eb' }}
          tickFormatter={(value: number) => formatCurrency(value)}
        />
        <YAxis 
          dataKey="units" 
          name="Units"
          tick={{ fontSize: 12, fill: '#6b7280' }}
          tickLine={{ stroke: '#e5e7eb' }}
          axisLine={{ stroke: '#e5e7eb' }}
          tickFormatter={(value: number) => formatNumber(value)}
        />
        <ZAxis dataKey="revenue" range={[64, 400]} name="Revenue" />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value: number, name: string) => {
            if (name === 'Price') return [formatCurrency(value), name];
            if (name === 'Units') return [formatNumber(value), name];
            if (name === 'Revenue') return [formatCurrency(value), name];
            return [value, name];
          }}
          labelFormatter={(label) => `Product: ${label}`}
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        />
        <Scatter 
          name="Products" 
          data={data} 
          fill="#3b82f6"
          stroke="#1d4ed8"
          strokeWidth={2}
        />
      </ScatterChart>
    </ResponsiveContainer>
  </ChartContainer>
);
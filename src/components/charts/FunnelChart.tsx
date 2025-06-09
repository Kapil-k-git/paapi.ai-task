import React from 'react';
import { 
  FunnelChart, 
  Funnel, 
  LabelList, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import { ChartContainer } from '../ui/ChartContainer';
import { formatNumber } from '@/utils/helpers';
import type { ChartProps, SalesFunnelData } from '@/types';

const renderCustomLabel = (props: any) => {
  const { x, y, width, height, value, name } = props;
  return (
    <text 
      x={x + width / 2} 
      y={y + height / 2} 
      fill="#fff" 
      textAnchor="middle" 
      dominantBaseline="central"
      fontSize="14"
      fontWeight="bold"
    >
      <tspan x={x + width / 2} dy="-0.3em">{name}</tspan>
      <tspan x={x + width / 2} dy="1.2em">{formatNumber(value)}</tspan>
    </text>
  );
};

export const ConversionFunnelChart: React.FC<ChartProps<SalesFunnelData>> = ({ 
  data, 
  title = "Sales Conversion Funnel",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart>
        <Tooltip 
          formatter={(value: number, name: string, props: any) => [
            `${formatNumber(value)} (${props.payload.percentage}%)`,
            name
          ]}
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        />
        <Funnel
          dataKey="value"
          data={data}
          isAnimationActive
          animationDuration={1500}
        >
          <LabelList content={renderCustomLabel} />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  </ChartContainer>
);

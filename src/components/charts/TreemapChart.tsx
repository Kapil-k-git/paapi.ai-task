import React from 'react';
import { 
  Treemap, 
  ResponsiveContainer, 
  Tooltip 
} from 'recharts';
import { ChartContainer } from '../ui/ChartContainer';
import { formatCurrency, formatNumber } from '@/utils/helpers';
import type { ChartProps, ProductDistributionData } from '@/types';

interface CustomizedContentProps {
  root?: any;
  depth?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  payload?: any;
  colors?: string[];
  rank?: number;
  name?: string;
}

const TREEMAP_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#84cc16', '#f97316'];

const CustomizedContent: React.FC<CustomizedContentProps> = (props) => {
  const {depth, x, y, width, height, index, payload, colors } = props;
  
  if (!x || !y || !width || !height || !payload) return null;
  
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: depth === 1 ? colors?.[index! % colors.length] || TREEMAP_COLORS[index! % TREEMAP_COLORS.length] : 'rgba(255,255,255,0)',
          stroke: '#fff',
          strokeWidth: 2,
          strokeOpacity: 1,
        }}
      />
      {depth === 1 && width > 60 && height > 40 ? (
        <>
          <text x={x + width / 2} y={y + height / 2 - 8} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">
            {payload.name}
          </text>
          <text x={x + width / 2} y={y + height / 2 + 8} textAnchor="middle" fill="#fff" fontSize="10">
            {formatNumber(payload.units)} units
          </text>
        </>
      ) : null}
    </g>
  );
};

export const ProductTreemap: React.FC<ChartProps<ProductDistributionData>> = ({ 
  data, 
  title = "Product Sales Distribution",
  className 
}) => (
  <ChartContainer title={title} className={className}>
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={data}
        dataKey="size"
        stroke="#fff"
        fill="#3b82f6"
        content={<CustomizedContent colors={TREEMAP_COLORS} />}
      >
        <Tooltip 
          formatter={(value: number, name: string, props: any) => {
            if (name === 'size') {
              return [
                `Sales: ${formatCurrency(props.payload.sales)}, Units: ${formatNumber(props.payload.units)}`,
                props.payload.name
              ];
            }
            return [value, name];
          }}
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(10px)'
          }}
        />
      </Treemap>
    </ResponsiveContainer>
  </ChartContainer>
);
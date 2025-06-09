'use client'

import React from 'react';

interface ChartsGridProps {
  children: React.ReactNode;
}

const ChartsGrid: React.FC<ChartsGridProps> = ({ children }) => {
  return (
    <div className="space-y-6">
      {children}
    </div>
  );
};

interface ChartRowProps {
  children: React.ReactNode;
  columns?: 1 | 2;
}

const ChartRow: React.FC<ChartRowProps> = ({ children, columns = 2 }) => {
  const gridCols = columns === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2';
  
  return (
    <div className={`grid ${gridCols} gap-6`}>
      {children}
    </div>
  );
};

export { ChartsGrid, ChartRow };
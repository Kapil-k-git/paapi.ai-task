'use client'

import React from 'react';
import StatCard from '../ui/StatCard';
import type { StatCardProps } from '@/types/dashboard';

interface StatsGridProps {
  stats: StatCardProps[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="min-w-0">
          <StatCard {...stat} />
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
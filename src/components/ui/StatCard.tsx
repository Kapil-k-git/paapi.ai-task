'use client'

import React from 'react';
import type { StatCardProps } from '@/types/dashboard';

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon: Icon, color }) => {
  const colorClasses: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-500 to-blue-600",
    green: "bg-gradient-to-br from-green-500 to-green-600", 
    yellow: "bg-gradient-to-br from-yellow-500 to-orange-500",
    red: "bg-gradient-to-br from-red-500 to-red-600",
    purple: "bg-gradient-to-br from-purple-500 to-purple-600",
    indigo: "bg-gradient-to-br from-indigo-500 to-indigo-600"
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 lg:p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0 pr-3">
          <p className="text-sm font-medium text-gray-600 mb-2">
            {title}
          </p>
          <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {value}
          </p>
          <div className={`text-sm font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <div className="flex items-center">
              <span className="mr-1">{change >= 0 ? '▲' : '▼'}</span>
              <span>{Math.abs(change)}%</span>
            </div>
            <div className="text-gray-500 text-xs mt-1">vs last month</div>
          </div>
        </div>
        <div className={`${colorClasses[color]} p-3 rounded-xl flex-shrink-0 shadow-md`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
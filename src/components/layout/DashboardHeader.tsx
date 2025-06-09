'use client'

import React from 'react';
import { Menu, Bell, RefreshCw, Search } from 'lucide-react';
import type { DashboardHeaderProps } from '@/types/dashboard';

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  setSidebarOpen,
  selectedTimeRange,
  setSelectedTimeRange,
  timeRanges
}) => {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 flex-shrink-0 z-10">
      <div className="flex items-center justify-between px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1 mr-2">
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 flex-shrink-0"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
          </button>
          <div className="min-w-0 flex-1">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
              Sales Analytics
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 truncate leading-tight">
              Real-time insights and performance metrics
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 flex-shrink-0">
          {/* Search - Hidden on small screens */}
          <div className="hidden xl:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent text-sm text-gray-700 placeholder-gray-500 focus:outline-none w-32"
            />
          </div>

          {/* Time Range Selector */}
          <div className="flex bg-gray-100 rounded-lg p-0.5">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range)}
                className={`px-1 sm:px-2 lg:px-3 py-1 text-xs font-medium rounded-md transition-all duration-200 ${
                  selectedTimeRange === range
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-1">
            <button className="xl:hidden p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <Search className="h-4 w-4" />
            </button>

            <button className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative">
              <Bell className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <button className="flex items-center space-x-1 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline text-sm">Refresh</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
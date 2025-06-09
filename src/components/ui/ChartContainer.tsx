'use client'

import React from 'react';
import { Download, RefreshCw } from 'lucide-react';

interface ChartContainerProps {
  title: string;
  children: React.ReactNode;  
  className?: string;
  onDownload?: () => void;
  onRefresh?: () => void;
  showActions?: boolean;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, 
  children, 
  className = "",
  onDownload,
  onRefresh,
  showActions = true
}) => (
  <div className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl ${className}`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
      {showActions && (
        <div className="flex items-center space-x-2">
          <button 
            onClick={onDownload}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            title="Download Chart"
          >
            <Download className="h-4 w-4" />
          </button>
          <button 
            onClick={onRefresh}
            className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            title="Refresh Data"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
    <div className="h-80">
      {children}
    </div>
  </div>
);

export default ChartContainer;
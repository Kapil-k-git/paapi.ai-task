'use client'

import React from 'react';
import { TrendingUp } from 'lucide-react';

interface WelcomeSectionProps {
  userName?: string;
  todayRevenue?: string;
  activeDeals?: number;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ 
  userName = "John", 
  todayRevenue = "$12,450", 
  activeDeals = 24 
}) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-2">Welcome back, {userName}! 👋</h3>
          <p className="text-blue-100 mb-4">
            Here's what's happening with your sales today.
          </p>
          <div className="flex items-center space-x-6 text-sm">
            <div>
              <span className="text-blue-200">Today's Revenue: </span>
              <span className="font-semibold">{todayRevenue}</span>
            </div>
            <div>
              <span className="text-blue-200">Active Deals: </span>
              <span className="font-semibold">{activeDeals}</span>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <TrendingUp className="h-10 w-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
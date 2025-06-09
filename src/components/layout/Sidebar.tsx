'use client'

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { X, BarChart3 } from 'lucide-react';
import type { SidebarProps } from '@/types/dashboard';

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, navigationItems }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (href: string) => {
    setSidebarOpen(false);
    
    router.push(`/${href}`);
  };

  const isActive = (href: string) => {
    return pathname.includes(href);
  };

  return (
    <div className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64 bg-white shadow-xl border-r border-gray-200 flex flex-col`}>
      {/* Sidebar Header */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-800">Sales Hub</h1>
            <p className="text-xs text-gray-500">Analytics Dashboard</p>
          </div>
        </div>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>
            
      {/* Navigation */}
      <nav className="flex-1 mt-6 px-4 overflow-y-auto">
        <div className="space-y-1">
          {navigationItems.map((item) => {
            const active = isActive(item.href);
            return (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  active
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className={`h-5 w-5 mr-3 transition-colors duration-200 ${
                    active ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                  }`} />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
       
      {/* Sidebar Footer */}
      <div className="p-4 flex-shrink-0">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">JD</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-800">John Doe</h4>
              <p className="text-xs text-gray-600">Sales Manager</p>
            </div>
          </div>
          <button className="w-full text-xs bg-white text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 border">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
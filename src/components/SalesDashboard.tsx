// ===== src/components/SalesDashboard.tsx - Refactored with Reusable Components =====
'use client'

import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Target, 
  Globe,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Settings
} from 'lucide-react';

// Import Recharts components
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Treemap,
  FunnelChart, Funnel, LabelList, ComposedChart
} from 'recharts';

// Import reusable components
import DashboardHeader from './layout/DashboardHeader';
import Sidebar from './layout/Sidebar';
import WelcomeSection from './sections/WelcomeSection';
import StatsGrid from './sections/StatsGrid';
import { ChartsGrid, ChartRow } from './sections/ChartsGrid';
import DashboardFooter from './layout/DashboardFooter';
import ChartContainer from './ui/ChartContainer';

// Import types
import type { StatCardProps, NavigationItem } from '@/types/dashboard';

// Sample data (same as before)
const sampleData = {
  monthlyRevenue: [
    { month: 'Jan', revenue: 45000, target: 40000 },
    { month: 'Feb', revenue: 52000, target: 45000 },
    { month: 'Mar', revenue: 48000, target: 50000 },
    { month: 'Apr', revenue: 61000, target: 55000 },
    { month: 'May', revenue: 55000, target: 60000 },
    { month: 'Jun', revenue: 67000, target: 65000 }
  ],
  salesTrends: [
    { date: '2024-01', sales: 1200, leads: 1800 },
    { date: '2024-02', sales: 1350, leads: 1950 },
    { date: '2024-03', sales: 1100, leads: 1700 },
    { date: '2024-04', sales: 1600, leads: 2200 },
    { date: '2024-05', sales: 1450, leads: 2100 },
    { date: '2024-06', sales: 1750, leads: 2400 }
  ],
  productCategories: [
    { name: 'Electronics', value: 35 },
    { name: 'Clothing', value: 25 },
    { name: 'Home & Garden', value: 20 },
    { name: 'Sports', value: 12 },
    { name: 'Books', value: 8 }
  ],
  cumulativeGrowth: [
    { month: 'Jan', current: 45000, previous: 38000 },
    { month: 'Feb', current: 97000, previous: 82000 },
    { month: 'Mar', current: 145000, previous: 128000 },
    { month: 'Apr', current: 206000, previous: 175000 },
    { month: 'May', current: 261000, previous: 228000 },
    { month: 'Jun', current: 328000, previous: 285000 }
  ],
  priceVsUnits: [
    { price: 10, units: 1200, product: 'Basic' },
    { price: 25, units: 800, product: 'Standard' },
    { price: 45, units: 600, product: 'Premium' },
    { price: 75, units: 400, product: 'Pro' },
    { price: 120, units: 250, product: 'Enterprise' }
  ],
  regionalSales: [
    { region: 'North America', value: 40 },
    { region: 'Europe', value: 30 },
    { region: 'Asia Pacific', value: 20 },
    { region: 'Latin America', value: 7 },
    { region: 'Africa', value: 3 }
  ],
  performanceMetrics: [
    { metric: 'Revenue Growth', value: 85, fullMark: 100 },
    { metric: 'Customer Satisfaction', value: 92, fullMark: 100 },
    { metric: 'Market Share', value: 78, fullMark: 100 },
    { metric: 'Lead Conversion', value: 65, fullMark: 100 },
    { metric: 'Team Performance', value: 88, fullMark: 100 }
  ],
  productDistribution: [
    { name: 'Laptops', size: 2400 },
    { name: 'Smartphones', size: 2200 },
    { name: 'Tablets', size: 1800 },
    { name: 'Headphones', size: 1200 },
    { name: 'Smartwatches', size: 800 }
  ],
  salesFunnel: [
    { name: 'Leads', value: 10000, fill: '#8884d8' },
    { name: 'Prospects', value: 6500, fill: '#83a6ed' },
    { name: 'Qualified', value: 4200, fill: '#8dd1e1' },
    { name: 'Proposals', value: 2800, fill: '#82ca9d' },
    { name: 'Closed Won', value: 1200, fill: '#ffc658' }
  ],
  revenueProfit: [
    { month: 'Jan', revenue: 45000, profit: 13500, margin: 30 },
    { month: 'Feb', revenue: 52000, profit: 15600, margin: 30 },
    { month: 'Mar', revenue: 48000, profit: 14400, margin: 30 },
    { month: 'Apr', revenue: 61000, profit: 18300, margin: 30 },
    { month: 'May', revenue: 55000, profit: 16500, margin: 30 },
    { month: 'Jun', revenue: 67000, profit: 20100, margin: 30 }
  ]
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

// Utility functions
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Individual Chart Components (same as before but using ChartContainer)
const SalesBarChart: React.FC = () => (
  <ChartContainer title="Monthly Revenue vs Target">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={sampleData.monthlyRevenue}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`} />
        <Tooltip formatter={(value, name) => [formatCurrency(value as number), name]} />
        <Legend />
        <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" radius={[4, 4, 0, 0]} />
        <Bar dataKey="target" fill="#10b981" name="Target" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const SalesLineChart: React.FC = () => (
  <ChartContainer title="Sales Trends Over Time">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={sampleData.salesTrends}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} name="Sales" />
        <Line type="monotone" dataKey="leads" stroke="#10b981" strokeWidth={3} name="Leads" />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const CategoryPieChart: React.FC = () => (
  <ChartContainer title="Sales by Product Category">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={sampleData.productCategories}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {sampleData.productCategories.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const GrowthAreaChart: React.FC = () => (
  <ChartContainer title="Cumulative Sales Growth">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={sampleData.cumulativeGrowth}>
        <defs>
          <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
          </linearGradient>
          <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`} />
        <Tooltip formatter={(value, name) => [formatCurrency(value as number), name]} />
        <Legend />
        <Area type="monotone" dataKey="previous" stackId="1" stroke="#94a3b8" fill="url(#colorPrevious)" name="Previous Year" />
        <Area type="monotone" dataKey="current" stackId="2" stroke="#3b82f6" fill="url(#colorCurrent)" name="Current Year" />
      </AreaChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const PriceScatterChart: React.FC = () => (
  <ChartContainer title="Price vs Units Sold">
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart data={sampleData.priceVsUnits}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="price" name="Price" unit="$" />
        <YAxis dataKey="units" name="Units" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Products" data={sampleData.priceVsUnits} fill="#3b82f6" />
      </ScatterChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const RegionalDonutChart: React.FC = () => (
  <ChartContainer title="Sales by Region">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={sampleData.regionalSales}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
        >
          {sampleData.regionalSales.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const PerformanceRadarChart: React.FC = () => (
  <ChartContainer title="Performance Metrics">
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={sampleData.performanceMetrics}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Performance" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const ProductTreemap: React.FC = () => (
  <ChartContainer title="Product Distribution">
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={sampleData.productDistribution}
        dataKey="size"
        stroke="#fff"
        fill="#3b82f6"
      />
    </ResponsiveContainer>
  </ChartContainer>
);

const ConversionFunnelChart: React.FC = () => (
  <ChartContainer title="Sales Conversion Funnel">
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart>
        <Tooltip />
        <Funnel dataKey="value" data={sampleData.salesFunnel} isAnimationActive>
          <LabelList position="center" fill="#fff" stroke="none" />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const RevenueComposedChart: React.FC = () => (
  <ChartContainer title="Revenue & Profit Analysis">
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={sampleData.revenueProfit}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" tickFormatter={(value) => `$${(value/1000).toFixed(0)}K`} />
        <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" name="Revenue" />
        <Bar yAxisId="left" dataKey="profit" fill="#10b981" name="Profit" />
        <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#f59e0b" name="Margin %" />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartContainer>
);

// Main Dashboard Component
const SalesDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>('12M');

  // Configuration data
  const timeRanges = ['7D', '1M', '3M', '6M', '12M', '2Y'];

  const stats: StatCardProps[] = [
    { title: "Total Revenue", value: "$792K", change: 12.5, icon: DollarSign, color: "green" },
    { title: "Total Sales", value: "2,400", change: 8.2, icon: TrendingUp, color: "blue" },
    { title: "Active Customers", value: "1,847", change: 15.3, icon: Users, color: "purple" },
    { title: "Conversion Rate", value: "12.3%", change: -2.4, icon: Target, color: "yellow" },
    { title: "Avg Order Value", value: "$330", change: 5.7, icon: ShoppingCart, color: "indigo" },
    { title: "Global Reach", value: "47 Countries", change: 18.9, icon: Globe, color: "red" }
  ];

  const navigationItems: NavigationItem[] = [
    { name: 'Overview', icon: TrendingUp, href: '#overview', active: true },
    { name: 'Revenue', icon: DollarSign, href: '#revenue', active: false, badge: 3 },
    { name: 'Analytics', icon: BarChart3, href: '#analytics', active: false },
    { name: 'Customers', icon: Users, href: '#customers', active: false, badge: 12 },
    { name: 'Products', icon: ShoppingCart, href: '#products', active: false },
    { name: 'Reports', icon: PieChartIcon, href: '#reports', active: false },
    { name: 'Performance', icon: Activity, href: '#performance', active: false },
    { name: 'Settings', icon: Settings, href: '#settings', active: false }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 overflow-hidden">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity duration-300" 
          onClick={() => setSidebarOpen(false)} 
        />
      )}

      {/* Sidebar Component */}
      <Sidebar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        navigationItems={navigationItems}
      />

      {/* Main content area */}
      <div className="flex-1 lg:ml-64 flex flex-col overflow-hidden">
        {/* Header Component */}
        <DashboardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          selectedTimeRange={selectedTimeRange}
          setSelectedTimeRange={setSelectedTimeRange}
          timeRanges={timeRanges}
        />

        {/* Scrollable content area */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-6 space-y-6">
            {/* Welcome Section Component */}
            <WelcomeSection 
              userName="John"
              todayRevenue="$12,450"
              activeDeals={24}
            />

            {/* Stats Grid Component */}
            <StatsGrid stats={stats} />

            {/* Charts Grid Component */}
            <ChartsGrid>
              {/* Row 1: Bar Chart & Line Chart */}
              <ChartRow>
                <SalesBarChart />
                <SalesLineChart />
              </ChartRow>

              {/* Row 2: Pie Chart & Area Chart */}
              <ChartRow>
                <CategoryPieChart />
                <GrowthAreaChart />
              </ChartRow>

              {/* Row 3: Scatter Chart & Donut Chart */}
              <ChartRow>
                <PriceScatterChart />
                <RegionalDonutChart />
              </ChartRow>

              {/* Row 4: Radar Chart & Treemap */}
              <ChartRow>
                <PerformanceRadarChart />
                <ProductTreemap />
              </ChartRow>

              {/* Row 5: Funnel Chart & Composed Chart */}
              <ChartRow>
                <ConversionFunnelChart />
                <RevenueComposedChart />
              </ChartRow>
            </ChartsGrid>

            {/* Footer Component */}
            <DashboardFooter 
              companyName="Sales Dashboard"
              year={2024}
              technologies={["Next.js", "TypeScript", "Recharts", "Tailwind CSS"]}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesDashboard;
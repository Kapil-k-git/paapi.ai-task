"use client";

import React, { useState } from "react";
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
  Settings,
} from "lucide-react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Treemap,
  FunnelChart,
  Funnel,
  LabelList,
  ComposedChart,
} from "recharts";

import DashboardHeader from "./layout/DashboardHeader";
import Sidebar from "./layout/Sidebar";
import WelcomeSection from "./sections/WelcomeSection";
import StatsGrid from "./sections/StatsGrid";
import { ChartsGrid, ChartRow } from "./sections/ChartsGrid";
import DashboardFooter from "./layout/DashboardFooter";
import ChartContainer from "./ui/ChartContainer";
import {
  monthlyRevenueData,
  salesTrendsData,
  productCategoriesData,
  cumulativeGrowthData,
  priceVsUnitsData,
  regionalSalesData,
  performanceMetricsData,
  productDistributionData,
  salesFunnelData,
  revenueProfitData,
} from "@/data/salesData";

import type { StatCardProps, NavigationItem } from "@/types/dashboard";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const SalesBarChart: React.FC = () => (
  <ChartContainer title="Monthly Revenue vs Target">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={monthlyRevenueData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" tick={{ fontSize: 12 }} />
        <YAxis
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
        />
        <Tooltip
          formatter={(value, name) => [formatCurrency(value as number), name]}
        />
        <Legend />
        <Bar
          dataKey="revenue"
          fill="#3b82f6"
          name="Revenue"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="target"
          fill="#10b981"
          name="Target"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const SalesLineChart: React.FC = () => (
  <ChartContainer title="Sales Trends Over Time">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={salesTrendsData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="date" tick={{ fontSize: 12 }} />
        <YAxis tick={{ fontSize: 12 }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#3b82f6"
          strokeWidth={3}
          name="Sales"
        />
        <Line
          type="monotone"
          dataKey="leads"
          stroke="#10b981"
          strokeWidth={3}
          name="Leads"
        />
      </LineChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const CategoryPieChart: React.FC = () => (
  <ChartContainer title="Sales by Product Category">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={productCategoriesData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {productCategoriesData.map((entry, index) => (
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
      <AreaChart data={cumulativeGrowthData}>
        <defs>
          <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="month" />
        <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`} />
        <Tooltip
          formatter={(value, name) => [formatCurrency(value as number), name]}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="previous"
          stackId="1"
          stroke="#94a3b8"
          fill="url(#colorPrevious)"
          name="Previous Year"
        />
        <Area
          type="monotone"
          dataKey="current"
          stackId="2"
          stroke="#3b82f6"
          fill="url(#colorCurrent)"
          name="Current Year"
        />
      </AreaChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const PriceScatterChart: React.FC = () => (
  <ChartContainer title="Price vs Units Sold">
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart data={priceVsUnitsData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="price" name="Price" unit="$" />
        <YAxis dataKey="units" name="Units" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="Products" data={priceVsUnitsData} fill="#3b82f6" />
      </ScatterChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const RegionalDonutChart: React.FC = () => (
  <ChartContainer title="Sales by Region">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={regionalSalesData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={120}
          paddingAngle={5}
          dataKey="value"
        >
          {regionalSalesData.map((entry, index) => (
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
      <RadarChart data={performanceMetricsData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#3b82f6"
          fill="#3b82f6"
          fillOpacity={0.3}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const ProductTreemap: React.FC = () => (
  <ChartContainer title="Product Distribution">
    <ResponsiveContainer width="100%" height="100%">
      <Treemap
        data={productDistributionData}
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
        <Funnel dataKey="value" data={salesFunnelData} isAnimationActive>
          <LabelList position="center" fill="#fff" stroke="none" />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const RevenueComposedChart: React.FC = () => (
  <ChartContainer title="Revenue & Profit Analysis">
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={revenueProfitData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis
          yAxisId="left"
          tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="revenue" fill="#3b82f6" name="Revenue" />
        <Bar yAxisId="left" dataKey="profit" fill="#10b981" name="Profit" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="margin"
          stroke="#f59e0b"
          name="Margin %"
        />
      </ComposedChart>
    </ResponsiveContainer>
  </ChartContainer>
);

const SalesDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>("12M");

  const timeRanges = ["7D", "1M", "3M", "6M", "12M", "2Y"];

  const stats: StatCardProps[] = [
    {
      title: "Total Revenue",
      value: "$792K",
      change: 12.5,
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Total Sales",
      value: "2,400",
      change: 8.2,
      icon: TrendingUp,
      color: "blue",
    },
    {
      title: "Active Customers",
      value: "1,847",
      change: 15.3,
      icon: Users,
      color: "purple",
    },
    {
      title: "Conversion Rate",
      value: "12.3%",
      change: -2.4,
      icon: Target,
      color: "yellow",
    },
    {
      title: "Avg Order Value",
      value: "$330",
      change: 5.7,
      icon: ShoppingCart,
      color: "indigo",
    },
    {
      title: "Global Reach",
      value: "47 Countries",
      change: 18.9,
      icon: Globe,
      color: "red",
    },
  ];

  const navigationItems: NavigationItem[] = [
    {
      name: "Overview",
      icon: TrendingUp,
      href: "sections/overview",
      active: true,
    },
    {
      name: "Revenue",
      icon: DollarSign,
      href: "sections/revenue",
      active: false,
      badge: 3,
    },
    {
      name: "Analytics",
      icon: BarChart3,
      href: "sections/analytics",
      active: false,
    },
    {
      name: "Customers",
      icon: Users,
      href: "sections/customers",
      active: false,
      badge: 12,
    },
    {
      name: "Products",
      icon: ShoppingCart,
      href: "sections/products",
      active: false,
    },
    {
      name: "Reports",
      icon: PieChartIcon,
      href: "sections/reports",
      active: false,
    },
    {
      name: "Performance",
      icon: Activity,
      href: "sections/performance",
      active: false,
    },
    {
      name: "Settings",
      icon: Settings,
      href: "sections/settings",
      active: false,
    },
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
              technologies={[
                "Next.js",
                "TypeScript",
                "Recharts",
                "Tailwind CSS",
              ]}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default SalesDashboard;

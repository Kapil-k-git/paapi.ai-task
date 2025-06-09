"use client";

import React, { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import {
  TrendingUp,
  DollarSign,
  Users,
  ShoppingCart,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Settings,
  Filter,
  Download,
  RefreshCw,
  Target,
  Plus,
  Eye,
  Edit,
  Package,
  FileText,
  Zap,
  Shield,
  AlertTriangle,
  Grid,
  Globe,
  Calendar,
  Star,
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
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import DashboardHeader from "@/components/layout/DashboardHeader";
import Sidebar from "@/components/layout/Sidebar";
import DashboardFooter from "@/components/layout/DashboardFooter";
import type { NavigationItem } from "@/types/dashboard";

// Sample data for different sections
const sampleDataSets = {
  overview: {
    chartData: [
      { month: "Jan", sales: 4500, leads: 1800, conversion: 25 },
      { month: "Feb", sales: 5200, leads: 2100, conversion: 24.8 },
      { month: "Mar", sales: 4800, leads: 1900, conversion: 25.3 },
      { month: "Apr", sales: 6100, leads: 2400, conversion: 25.4 },
      { month: "May", sales: 5500, leads: 2200, conversion: 25.0 },
      { month: "Jun", sales: 6700, leads: 2600, conversion: 25.8 },
    ],
    pieData: [
      { name: "Direct Sales", value: 45, color: "#0088FE" },
      { name: "Online", value: 30, color: "#00C49F" },
      { name: "Referrals", value: 15, color: "#FFBB28" },
      { name: "Partners", value: 10, color: "#FF8042" },
    ],
  },
  revenue: {
    chartData: [
      { month: "Jan", revenue: 45000, profit: 13500, expenses: 31500 },
      { month: "Feb", revenue: 52000, profit: 15600, expenses: 36400 },
      { month: "Mar", revenue: 48000, profit: 14400, expenses: 33600 },
      { month: "Apr", revenue: 61000, profit: 18300, expenses: 42700 },
      { month: "May", revenue: 55000, profit: 16500, expenses: 38500 },
      { month: "Jun", revenue: 67000, profit: 20100, expenses: 46900 },
    ],
    pieData: [
      { name: "Product Sales", value: 60, color: "#10B981" },
      { name: "Services", value: 25, color: "#3B82F6" },
      { name: "Subscriptions", value: 15, color: "#8B5CF6" },
    ],
  },
  analytics: {
    chartData: [
      { metric: "Page Views", current: 85000, previous: 72000 },
      { metric: "Sessions", current: 12400, previous: 11200 },
      { metric: "Bounce Rate", current: 35, previous: 42 },
      { metric: "Avg Session", current: 180, previous: 165 },
    ],
    radarData: [
      { subject: "Traffic", A: 90, B: 80, fullMark: 100 },
      { subject: "Engagement", A: 85, B: 75, fullMark: 100 },
      { subject: "Conversion", A: 75, B: 70, fullMark: 100 },
      { subject: "Retention", A: 80, B: 85, fullMark: 100 },
      { subject: "Satisfaction", A: 95, B: 88, fullMark: 100 },
    ],
  },
  customers: {
    chartData: [
      { segment: "Enterprise", count: 150, value: 2400000, retention: 95 },
      { segment: "SMB", count: 450, value: 1200000, retention: 88 },
      { segment: "Startup", count: 280, value: 450000, retention: 82 },
      { segment: "Individual", count: 1200, value: 180000, retention: 75 },
    ],
    tableData: [
      {
        id: 1,
        name: "Acme Corp",
        email: "contact@acme.com",
        status: "Active",
        value: "$12,500",
        lastContact: "2 days ago",
      },
      {
        id: 2,
        name: "TechStart Inc",
        email: "hello@techstart.com",
        status: "Prospect",
        value: "$8,200",
        lastContact: "1 week ago",
      },
      {
        id: 3,
        name: "Global Solutions",
        email: "info@global.com",
        status: "Active",
        value: "$25,800",
        lastContact: "3 days ago",
      },
    ],
  },
  products: {
    chartData: [
      { product: "Product A", sales: 2400, stock: 45, rating: 4.8 },
      { product: "Product B", sales: 1800, stock: 32, rating: 4.6 },
      { product: "Product C", sales: 3200, stock: 28, rating: 4.9 },
      { product: "Product D", sales: 1500, stock: 15, rating: 4.4 },
      { product: "Product E", sales: 2800, stock: 38, rating: 4.7 },
    ],
    inventory: [
      {
        name: "Laptop Pro",
        category: "Electronics",
        stock: 45,
        price: "$1,299",
        status: "In Stock",
      },
      {
        name: "Wireless Mouse",
        category: "Accessories",
        stock: 12,
        price: "$29",
        status: "Low Stock",
      },
      {
        name: "Monitor 4K",
        category: "Electronics",
        stock: 0,
        price: "$399",
        status: "Out of Stock",
      },
    ],
  },
  reports: {
    reportData: [
      {
        id: 1,
        type: "Sales Report",
        generated: "2024-06-08",
        downloads: 45,
        status: "Ready",
        size: "2.4 MB",
      },
      {
        id: 2,
        type: "Customer Analysis",
        generated: "2024-06-07",
        downloads: 32,
        status: "Processing",
        size: "1.8 MB",
      },
      {
        id: 3,
        type: "Revenue Forecast",
        generated: "2024-06-06",
        downloads: 28,
        status: "Ready",
        size: "3.2 MB",
      },
    ],
    scheduleData: [
      {
        id: 1,
        report: "Weekly Sales",
        frequency: "Weekly",
        nextRun: "2024-06-15",
        enabled: true,
      },
      {
        id: 2,
        report: "Monthly Revenue",
        frequency: "Monthly",
        nextRun: "2024-07-01",
        enabled: true,
      },
      {
        id: 3,
        report: "Quarterly Review",
        frequency: "Quarterly",
        nextRun: "2024-07-01",
        enabled: false,
      },
    ],
  },
  performance: {
    teamData: [
      {
        id: 1,
        name: "John Smith",
        role: "Sales Rep",
        target: 100,
        achieved: 125,
        efficiency: 95,
        avatar: "JS",
      },
      {
        id: 2,
        name: "Sarah Wilson",
        role: "Sales Rep",
        target: 100,
        achieved: 118,
        efficiency: 92,
        avatar: "SW",
      },
      {
        id: 3,
        name: "Mike Johnson",
        role: "Account Mgr",
        target: 80,
        achieved: 95,
        efficiency: 88,
        avatar: "MJ",
      },
    ],
    kpiData: [
      {
        kpi: "Sales Target",
        current: 92,
        target: 100,
        trend: "up",
        icon: Target,
      },
      { kpi: "Lead Response", current: 88, target: 85, trend: "up", icon: Zap },
      {
        kpi: "Customer Satisfaction",
        current: 94,
        target: 90,
        trend: "up",
        icon: Star,
      },
      {
        kpi: "Deal Closure Rate",
        current: 76,
        target: 80,
        trend: "down",
        icon: TrendingUp,
      },
    ],
  },
  settings: {
    integrations: [
      {
        id: 1,
        name: "Salesforce",
        status: "Connected",
        lastSync: "5 min ago",
        type: "CRM",
        icon: "🔗",
      },
      {
        id: 2,
        name: "HubSpot",
        status: "Connected",
        lastSync: "12 min ago",
        type: "Marketing",
        icon: "📧",
      },
      {
        id: 3,
        name: "Slack",
        status: "Disconnected",
        lastSync: "2 days ago",
        type: "Communication",
        icon: "💬",
      },
    ],
    users: [
      {
        id: 1,
        name: "Admin User",
        email: "admin@company.com",
        role: "Administrator",
        lastActive: "Now",
        avatar: "AU",
      },
      {
        id: 2,
        name: "Sales Manager",
        email: "sales@company.com",
        role: "Manager",
        lastActive: "5 min ago",
        avatar: "SM",
      },
      {
        id: 3,
        name: "Marketing Lead",
        email: "marketing@company.com",
        role: "User",
        lastActive: "1 hour ago",
        avatar: "ML",
      },
    ],
  },
};

const sectionConfigs = {
  overview: {
    title: "Overview",
    description: "Get a comprehensive view of your sales performance",
    icon: TrendingUp,
    color: "blue",
    stats: [
      {
        label: "Total Sales",
        value: "$2.4M",
        change: "+12%",
        icon: DollarSign,
      },
      { label: "Active Deals", value: "156", change: "+8%", icon: Target },
      {
        label: "Conversion Rate",
        value: "23.4%",
        change: "+5%",
        icon: TrendingUp,
      },
      { label: "Team Performance", value: "94%", change: "+2%", icon: Users },
    ],
  },
  revenue: {
    title: "Revenue Analysis",
    description: "Track revenue trends and financial performance",
    icon: DollarSign,
    color: "green",
    stats: [
      {
        label: "Monthly Revenue",
        value: "$847K",
        change: "+15%",
        icon: DollarSign,
      },
      {
        label: "Quarterly Growth",
        value: "28%",
        change: "+7%",
        icon: TrendingUp,
      },
      {
        label: "Average Deal Size",
        value: "$5.2K",
        change: "+12%",
        icon: Target,
      },
      { label: "Profit Margin", value: "30%", change: "+9%", icon: BarChart3 },
    ],
  },
  analytics: {
    title: "Advanced Analytics",
    description: "Deep dive into your sales data and metrics",
    icon: BarChart3,
    color: "purple",
    stats: [
      { label: "Data Points", value: "2.4M", change: "+22%", icon: BarChart3 },
      {
        label: "Reports Generated",
        value: "1,247",
        change: "+18%",
        icon: FileText,
      },
      { label: "Insights Found", value: "89", change: "+34%", icon: Eye },
      { label: "Accuracy Rate", value: "97.2%", change: "+3%", icon: Target },
    ],
  },
  customers: {
    title: "Customer Management",
    description: "Manage and analyze your customer relationships",
    icon: Users,
    color: "indigo",
    stats: [
      { label: "Total Customers", value: "3,842", change: "+18%", icon: Users },
      { label: "New This Month", value: "247", change: "+25%", icon: Plus },
      { label: "Retention Rate", value: "94.7%", change: "+5%", icon: Shield },
      {
        label: "Satisfaction Score",
        value: "4.8/5",
        change: "+2%",
        icon: Star,
      },
    ],
  },
  products: {
    title: "Product Catalog",
    description: "Manage your products and inventory",
    icon: ShoppingCart,
    color: "orange",
    stats: [
      {
        label: "Total Products",
        value: "1,284",
        change: "+12%",
        icon: Package,
      },
      { label: "Best Sellers", value: "47", change: "+8%", icon: Star },
      {
        label: "Out of Stock",
        value: "23",
        change: "-15%",
        icon: AlertTriangle,
      },
      { label: "Categories", value: "156", change: "+45%", icon: Grid },
    ],
  },
  reports: {
    title: "Reports & Insights",
    description: "Generate and analyze comprehensive reports",
    icon: FileText,
    color: "pink",
    stats: [
      {
        label: "Generated Reports",
        value: "1,247",
        change: "+28%",
        icon: FileText,
      },
      {
        label: "Scheduled Reports",
        value: "89",
        change: "+12%",
        icon: Calendar,
      },
      {
        label: "Custom Dashboards",
        value: "34",
        change: "+67%",
        icon: BarChart3,
      },
      { label: "Data Sources", value: "12", change: "+20%", icon: Globe },
    ],
  },
  performance: {
    title: "Performance Metrics",
    description: "Monitor team and individual performance",
    icon: Activity,
    color: "red",
    stats: [
      { label: "Team Score", value: "92%", change: "+8%", icon: Activity },
      { label: "Individual KPIs", value: "847", change: "+15%", icon: Target },
      { label: "Goals Achieved", value: "76%", change: "+12%", icon: Star },
      {
        label: "Improvement Areas",
        value: "12",
        change: "-8%",
        icon: TrendingUp,
      },
    ],
  },
  settings: {
    title: "Settings & Configuration",
    description: "Customize your dashboard and preferences",
    icon: Settings,
    color: "gray",
    stats: [
      { label: "Active Integrations", value: "24", change: "+6%", icon: Globe },
      { label: "Custom Fields", value: "89", change: "+12%", icon: Edit },
      { label: "Automation Rules", value: "156", change: "+34%", icon: Zap },
      { label: "User Permissions", value: "47", change: "+8%", icon: Shield },
    ],
  },
};

const getColorClasses = (color: string) => {
  const colorMap: Record<
    string,
    { bg: string; text: string; border: string; accent: string; light: string }
  > = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      accent: "bg-blue-600",
      light: "bg-blue-100",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-700",
      border: "border-green-200",
      accent: "bg-green-600",
      light: "bg-green-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-700",
      border: "border-purple-200",
      accent: "bg-purple-600",
      light: "bg-purple-100",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-700",
      border: "border-indigo-200",
      accent: "bg-indigo-600",
      light: "bg-indigo-100",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      border: "border-orange-200",
      accent: "bg-orange-600",
      light: "bg-orange-100",
    },
    pink: {
      bg: "bg-pink-50",
      text: "text-pink-700",
      border: "border-pink-200",
      accent: "bg-pink-600",
      light: "bg-pink-100",
    },
    red: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      accent: "bg-red-600",
      light: "bg-red-100",
    },
    gray: {
      bg: "bg-gray-50",
      text: "text-gray-700",
      border: "border-gray-200",
      accent: "bg-gray-600",
      light: "bg-gray-100",
    },
  };
  return colorMap[color] || colorMap.blue;
};

const OverviewContent = ({ data }: { data: any; colorClasses: any }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
          <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
          Sales Performance
        </h3>
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#3B82F6" name="Sales" />
              <Bar dataKey="leads" fill="#10B981" name="Leads" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
          <PieChartIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
          Sales Channels
        </h3>
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={isMobile ? 80 : 100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.pieData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Revenue Content Component
const RevenueContent = ({ data }: { data: any; colorClasses: any }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
          <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-600" />
          Revenue vs Profit vs Expenses
        </h3>
        <div className="h-80 sm:h-96">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data.chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, ""]}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stackId="1"
                stroke="#10B981"
                fill="#10B981"
                name="Revenue"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stackId="2"
                stroke="#EF4444"
                fill="#EF4444"
                name="Expenses"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stackId="3"
                stroke="#3B82F6"
                fill="#3B82F6"
                name="Profit"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
          <PieChartIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-600" />
          Revenue Sources
        </h3>
        <div className="h-64 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.pieData}
                cx="50%"
                cy="50%"
                innerRadius={isMobile ? 40 : 60}
                outerRadius={isMobile ? 90 : 120}
                paddingAngle={5}
                dataKey="value"
              >
                {data.pieData.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// Analytics Content Component
const AnalyticsContent = ({ data }: { data: any; colorClasses: any }) => (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
        <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-600" />
        Current vs Previous Period
      </h3>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="current" fill="#8B5CF6" name="Current" />
            <Bar dataKey="previous" fill="#D1D5DB" name="Previous" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
      <h3 className="text-base sm:text-lg font-semibold mb-4 flex items-center">
        <Activity className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-600" />
        Performance Radar
      </h3>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data.radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />
            <Radar
              name="Current"
              dataKey="A"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Radar
              name="Previous"
              dataKey="B"
              stroke="#D1D5DB"
              fill="#D1D5DB"
              fillOpacity={0.3}
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

const CustomersContent = ({}: { data: any; colorClasses: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
    <Users className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Customer Management
    </h3>
    <p className="text-gray-600">
      Customer data and analytics will be displayed here.
    </p>
  </div>
);

const ProductsContent = ({}: { data: any; colorClasses: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
    <ShoppingCart className="h-16 w-16 text-orange-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Product Catalog
    </h3>
    <p className="text-gray-600">
      Product inventory and management tools will be displayed here.
    </p>
  </div>
);

const ReportsContent = ({}: { data: any; colorClasses: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
    <FileText className="h-16 w-16 text-pink-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Reports & Insights
    </h3>
    <p className="text-gray-600">
      Generated reports and scheduled tasks will be displayed here.
    </p>
  </div>
);

const PerformanceContent = ({}: { data: any; colorClasses: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
    <Activity className="h-16 w-16 text-red-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Performance Metrics
    </h3>
    <p className="text-gray-600">
      Team performance and KPI tracking will be displayed here.
    </p>
  </div>
);

const SettingsContent = ({}: { data: any; colorClasses: any }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
    <Settings className="h-16 w-16 text-gray-600 mx-auto mb-4" />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">
      Settings & Configuration
    </h3>
    <p className="text-gray-600">
      System settings and user management will be displayed here.
    </p>
  </div>
);

const CommonSectionPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [selectedTimeRange, setSelectedTimeRange] = useState<string>("12M");
  const params = useParams();
  const pathname = usePathname();

  let section = "overview";

  if (params.section && typeof params.section === "string") {
    section = params.section;
  }

  if (section === "overview" && pathname) {
    const pathParts = pathname.split("/");
    const sectionIndex = pathParts.findIndex((part) => part === "sections");
    if (sectionIndex !== -1 && pathParts[sectionIndex + 1]) {
      section = pathParts[sectionIndex + 1];
    }
  }

  const timeRanges = ["7D", "1M", "3M", "6M", "12M", "2Y"];

  const navigationItems: NavigationItem[] = [
    {
      name: "Overview",
      icon: TrendingUp,
      href: "sections/overview",
      active: section === "overview",
    },
    {
      name: "Revenue",
      icon: DollarSign,
      href: "sections/revenue",
      active: section === "revenue",
      badge: 3,
    },
    {
      name: "Analytics",
      icon: BarChart3,
      href: "sections/analytics",
      active: section === "analytics",
    },
    {
      name: "Customers",
      icon: Users,
      href: "sections/customers",
      active: section === "customers",
      badge: 12,
    },
    {
      name: "Products",
      icon: ShoppingCart,
      href: "sections/products",
      active: section === "products",
    },
    {
      name: "Reports",
      icon: FileText,
      href: "sections/reports",
      active: section === "reports",
    },
    {
      name: "Performance",
      icon: Activity,
      href: "sections/performance",
      active: section === "performance",
    },
    {
      name: "Settings",
      icon: Settings,
      href: "sections/settings",
      active: section === "settings",
    },
  ];

  const currentSection =
    sectionConfigs[section as keyof typeof sectionConfigs] ||
    sectionConfigs.overview;
  const currentData =
    sampleDataSets[section as keyof typeof sampleDataSets] ||
    sampleDataSets.overview;
  const colorClasses = getColorClasses(currentSection.color);

  const renderSectionContent = () => {
    switch (section) {
      case "overview":
        return (
          <OverviewContent data={currentData} colorClasses={colorClasses} />
        );
      case "revenue":
        return (
          <RevenueContent data={currentData} colorClasses={colorClasses} />
        );
      case "analytics":
        return (
          <AnalyticsContent data={currentData} colorClasses={colorClasses} />
        );
      case "customers":
        return (
          <CustomersContent data={currentData} colorClasses={colorClasses} />
        );
      case "products":
        return (
          <ProductsContent data={currentData} colorClasses={colorClasses} />
        );
      case "reports":
        return (
          <ReportsContent data={currentData} colorClasses={colorClasses} />
        );
      case "performance":
        return (
          <PerformanceContent data={currentData} colorClasses={colorClasses} />
        );
      case "settings":
        return (
          <SettingsContent data={currentData} colorClasses={colorClasses} />
        );
      default:
        return (
          <OverviewContent data={currentData} colorClasses={colorClasses} />
        );
    }
  };

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

        <main className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4 lg:p-6 space-y-4 sm:space-y-6">
            {/* Section Header */}
            <div
              className={`${colorClasses.bg} ${colorClasses.border} border rounded-xl p-4 sm:p-6`}
            >
              <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div
                    className={`${colorClasses.accent} p-2 sm:p-3 rounded-lg flex-shrink-0`}
                  >
                    <currentSection.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h1
                      className={`text-lg sm:text-xl lg:text-2xl font-bold ${colorClasses.text} truncate`}
                    >
                      {currentSection.title}
                    </h1>
                    <p className="text-sm sm:text-base text-gray-600 mt-1 line-clamp-2">
                      {currentSection.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2 flex-shrink-0">
                  <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Filter</span>
                  </button>
                  <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                  <button className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <RefreshCw className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Refresh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {currentSection.stats.map((stat: any, index: number) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">
                        {stat.label}
                      </p>
                      <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 truncate">
                        {stat.value}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 ml-2 flex-shrink-0">
                      <stat.icon
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${colorClasses.text}`}
                      />
                      <div
                        className={`text-xs sm:text-sm font-medium ${
                          stat.change.startsWith("+")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {renderSectionContent()}

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

export default CommonSectionPage;

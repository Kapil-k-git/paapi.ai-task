import { LucideIcon } from 'lucide-react'

export interface MonthlyRevenueData {
  month: string;
  revenue: number;
  target: number;
  growth: number;
}

export interface SalesTrendsData {
  date: string;
  sales: number;
  leads: number;
  conversion: number;
}

export interface ProductCategoryData {
  name: string;
  value: number;
  sales: number;
  growth: number;
}

export interface CumulativeGrowthData {
  month: string;
  current: number;
  previous: number;
  difference: number;
}

export interface PriceVsUnitsData {
  price: number;
  units: number;
  product: string;
  revenue: number;
}

export interface RegionalSalesData {
  region: string;
  value: number;
  sales: number;
  customers: number;
}

export interface PerformanceMetricsData {
  metric: string;
  value: number;
  fullMark: number;
  target: number;
}

export interface ProductDistributionData {
  name: string;
  size: number;
  sales: number;
  units: number;
}

export interface SalesFunnelData {
  name: string;
  value: number;
  fill: string;
  percentage: number;
}

export interface RevenueProfitData {
  month: string;
  revenue: number;
  profit: number;
  margin: number;
  costs: number;
}

export interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'indigo';
}

export interface ChartContainerProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

export interface ChartProps<T = any> {
  data: T[];
  title?: string;
  className?: string;
}

export type ColorScheme = string[];

export interface SalesDataCollection {
  monthlyRevenue: MonthlyRevenueData[];
  salesTrends: SalesTrendsData[];
  productCategories: ProductCategoryData[];
  cumulativeGrowth: CumulativeGrowthData[];
  priceVsUnits: PriceVsUnitsData[];
  regionalSales: RegionalSalesData[];
  performanceMetrics: PerformanceMetricsData[];
  productDistribution: ProductDistributionData[];
  salesFunnel: SalesFunnelData[];
  revenueProfit: RevenueProfitData[];
}

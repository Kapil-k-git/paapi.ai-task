import type { 
    MonthlyRevenueData, 
    SalesTrendsData,
    ProductCategoryData,
    CumulativeGrowthData,
    PriceVsUnitsData,
    RegionalSalesData,
    PerformanceMetricsData,
    ProductDistributionData,
    SalesFunnelData,
    RevenueProfitData,
    ColorScheme
  } from '@/types'
  
  export const monthlyRevenueData: MonthlyRevenueData[] = [
    { month: 'Jan', revenue: 45000, target: 40000, growth: 12.5 },
    { month: 'Feb', revenue: 52000, target: 45000, growth: 15.6 },
    { month: 'Mar', revenue: 48000, target: 50000, growth: -7.7 },
    { month: 'Apr', revenue: 61000, target: 55000, growth: 27.1 },
    { month: 'May', revenue: 55000, target: 60000, growth: -9.8 },
    { month: 'Jun', revenue: 67000, target: 65000, growth: 21.8 },
    { month: 'Jul', revenue: 71000, target: 70000, growth: 6.0 },
    { month: 'Aug', revenue: 69000, target: 68000, growth: -2.8 },
    { month: 'Sep', revenue: 75000, target: 72000, growth: 8.7 },
    { month: 'Oct', revenue: 78000, target: 75000, growth: 4.0 },
    { month: 'Nov', revenue: 82000, target: 80000, growth: 5.1 },
    { month: 'Dec', revenue: 89000, target: 85000, growth: 8.5 }
  ];
  
  export const salesTrendsData: SalesTrendsData[] = [
    { date: '2024-01', sales: 1200, leads: 1800, conversion: 66.7 },
    { date: '2024-02', sales: 1350, leads: 1950, conversion: 69.2 },
    { date: '2024-03', sales: 1100, leads: 1700, conversion: 64.7 },
    { date: '2024-04', sales: 1600, leads: 2200, conversion: 72.7 },
    { date: '2024-05', sales: 1450, leads: 2100, conversion: 69.0 },
    { date: '2024-06', sales: 1750, leads: 2400, conversion: 72.9 },
    { date: '2024-07', sales: 1850, leads: 2500, conversion: 74.0 },
    { date: '2024-08', sales: 1700, leads: 2300, conversion: 73.9 },
    { date: '2024-09', sales: 1950, leads: 2600, conversion: 75.0 },
    { date: '2024-10', sales: 2100, leads: 2800, conversion: 75.0 },
    { date: '2024-11', sales: 2250, leads: 2900, conversion: 77.6 },
    { date: '2024-12', sales: 2400, leads: 3100, conversion: 77.4 }
  ];
  
  export const productCategoriesData: ProductCategoryData[] = [
    { name: 'Electronics', value: 35, sales: 850000, growth: 15.2 },
    { name: 'Clothing', value: 25, sales: 620000, growth: 8.7 },
    { name: 'Home & Garden', value: 20, sales: 480000, growth: 12.1 },
    { name: 'Sports & Outdoors', value: 12, sales: 290000, growth: 18.5 },
    { name: 'Books & Media', value: 8, sales: 195000, growth: 5.3 }
  ];
  
  export const cumulativeGrowthData: CumulativeGrowthData[] = [
    { month: 'Jan', current: 45000, previous: 38000, difference: 7000 },
    { month: 'Feb', current: 97000, previous: 82000, difference: 15000 },
    { month: 'Mar', current: 145000, previous: 128000, difference: 17000 },
    { month: 'Apr', current: 206000, previous: 175000, difference: 31000 },
    { month: 'May', current: 261000, previous: 228000, difference: 33000 },
    { month: 'Jun', current: 328000, previous: 285000, difference: 43000 },
    { month: 'Jul', current: 399000, previous: 342000, difference: 57000 },
    { month: 'Aug', current: 468000, previous: 398000, difference: 70000 },
    { month: 'Sep', current: 543000, previous: 465000, difference: 78000 },
    { month: 'Oct', current: 621000, previous: 532000, difference: 89000 },
    { month: 'Nov', current: 703000, previous: 605000, difference: 98000 },
    { month: 'Dec', current: 792000, previous: 678000, difference: 114000 }
  ];
  
  export const priceVsUnitsData: PriceVsUnitsData[] = [
    { price: 10, units: 1200, product: 'Basic Package', revenue: 12000 },
    { price: 25, units: 800, product: 'Standard Package', revenue: 20000 },
    { price: 45, units: 600, product: 'Premium Package', revenue: 27000 },
    { price: 75, units: 400, product: 'Professional Package', revenue: 30000 },
    { price: 120, units: 250, product: 'Enterprise Package', revenue: 30000 },
    { price: 200, units: 150, product: 'Ultimate Package', revenue: 30000 },
    { price: 350, units: 80, product: 'Luxury Package', revenue: 28000 },
    { price: 500, units: 50, product: 'Elite Package', revenue: 25000 },
    { price: 750, units: 25, product: 'Platinum Package', revenue: 18750 },
    { price: 1000, units: 15, product: 'Diamond Package', revenue: 15000 }
  ];
  
  export const regionalSalesData: RegionalSalesData[] = [
    { region: 'North America', value: 40, sales: 2400000, customers: 12500 },
    { region: 'Europe', value: 30, sales: 1800000, customers: 9800 },
    { region: 'Asia Pacific', value: 20, sales: 1200000, customers: 15200 },
    { region: 'Latin America', value: 7, sales: 420000, customers: 3400 },
    { region: 'Africa & Middle East', value: 3, sales: 180000, customers: 1800 }
  ];
  
  export const performanceMetricsData: PerformanceMetricsData[] = [
    { metric: 'Revenue Growth', value: 85, fullMark: 100, target: 80 },
    { metric: 'Customer Satisfaction', value: 92, fullMark: 100, target: 90 },
    { metric: 'Market Share', value: 78, fullMark: 100, target: 75 },
    { metric: 'Lead Conversion', value: 65, fullMark: 100, target: 70 },
    { metric: 'Team Performance', value: 88, fullMark: 100, target: 85 },
    { metric: 'Product Quality', value: 94, fullMark: 100, target: 90 },
    { metric: 'Customer Retention', value: 82, fullMark: 100, target: 85 },
    { metric: 'Brand Awareness', value: 76, fullMark: 100, target: 80 }
  ];
  
  export const productDistributionData: ProductDistributionData[] = [
    { name: 'Laptops', size: 2400, sales: 2400000, units: 4800 },
    { name: 'Smartphones', size: 2200, sales: 2200000, units: 8800 },
    { name: 'Tablets', size: 1800, sales: 1800000, units: 7200 },
    { name: 'Headphones', size: 1200, sales: 1200000, units: 12000 },
    { name: 'Smartwatches', size: 800, sales: 800000, units: 4000 },
    { name: 'Cameras', size: 600, sales: 600000, units: 1200 },
    { name: 'Gaming Consoles', size: 400, sales: 400000, units: 1600 },
    { name: 'Accessories', size: 300, sales: 300000, units: 6000 },
    { name: 'Smart Home', size: 250, sales: 250000, units: 2500 },
    { name: 'Audio Systems', size: 200, sales: 200000, units: 800 }
  ];
  
  export const salesFunnelData: SalesFunnelData[] = [
    { name: 'Website Visitors', value: 10000, fill: '#8884d8', percentage: 100 },
    { name: 'Leads Generated', value: 6500, fill: '#83a6ed', percentage: 65 },
    { name: 'Qualified Leads', value: 4200, fill: '#8dd1e1', percentage: 42 },
    { name: 'Proposals Sent', value: 2800, fill: '#82ca9d', percentage: 28 },
    { name: 'In Negotiations', value: 1900, fill: '#a4de6c', percentage: 19 },
    { name: 'Closed Won', value: 1200, fill: '#ffc658', percentage: 12 }
  ];
  
  export const revenueProfitData: RevenueProfitData[] = [
    { month: 'Jan', revenue: 45000, profit: 13500, margin: 30, costs: 31500 },
    { month: 'Feb', revenue: 52000, profit: 15600, margin: 30, costs: 36400 },
    { month: 'Mar', revenue: 48000, profit: 14400, margin: 30, costs: 33600 },
    { month: 'Apr', revenue: 61000, profit: 18300, margin: 30, costs: 42700 },
    { month: 'May', revenue: 55000, profit: 16500, margin: 30, costs: 38500 },
    { month: 'Jun', revenue: 67000, profit: 20100, margin: 30, costs: 46900 },
    { month: 'Jul', revenue: 71000, profit: 21300, margin: 30, costs: 49700 },
    { month: 'Aug', revenue: 69000, profit: 20700, margin: 30, costs: 48300 },
    { month: 'Sep', revenue: 75000, profit: 22500, margin: 30, costs: 52500 },
    { month: 'Oct', revenue: 78000, profit: 23400, margin: 30, costs: 54600 },
    { month: 'Nov', revenue: 82000, profit: 24600, margin: 30, costs: 57400 },
    { month: 'Dec', revenue: 89000, profit: 26700, margin: 30, costs: 62300 }
  ];
  
  export const customerDemographicsData = [
    { ageGroup: '18-25', count: 1250, percentage: 15.2 },
    { ageGroup: '26-35', count: 2890, percentage: 35.1 },
    { ageGroup: '36-45', count: 2340, percentage: 28.4 },
    { ageGroup: '46-55', count: 1180, percentage: 14.3 },
    { ageGroup: '56+', count: 580, percentage: 7.0 }
  ];
  
  export const topSellingProductsData = [
    { product: 'iPhone 15 Pro', sales: 125000, units: 2500, rating: 4.8 },
    { product: 'MacBook Air M2', sales: 98000, units: 980, rating: 4.9 },
    { product: 'Samsung Galaxy S24', sales: 87000, units: 2175, rating: 4.7 },
    { product: 'Dell XPS 13', sales: 76000, units: 950, rating: 4.6 },
    { product: 'AirPods Pro', sales: 65000, units: 3250, rating: 4.8 },
    { product: 'Sony WH-1000XM5', sales: 54000, units: 1800, rating: 4.9 },
    { product: 'iPad Pro', sales: 45000, units: 500, rating: 4.7 },
    { product: 'Surface Laptop', sales: 38000, units: 380, rating: 4.5 }
  ];
  
  export const channelSalesData = [
    { month: 'Jan', online: 28000, retail: 12000, mobile: 5000 },
    { month: 'Feb', online: 32000, retail: 14000, mobile: 6000 },
    { month: 'Mar', online: 29000, retail: 13000, mobile: 6000 },
    { month: 'Apr', online: 38000, retail: 16000, mobile: 7000 },
    { month: 'May', online: 34000, retail: 15000, mobile: 6000 },
    { month: 'Jun', online: 42000, retail: 18000, mobile: 7000 },
    { month: 'Jul', online: 45000, retail: 19000, mobile: 7000 },
    { month: 'Aug', online: 43000, retail: 18000, mobile: 8000 },
    { month: 'Sep', online: 47000, retail: 20000, mobile: 8000 },
    { month: 'Oct', online: 49000, retail: 21000, mobile: 8000 },
    { month: 'Nov', online: 52000, retail: 22000, mobile: 8000 },
    { month: 'Dec', online: 56000, retail: 24000, mobile: 9000 }
  ];
  
  export const customerAcquisitionData = [
    { channel: 'Social Media', cost: 45, customers: 850, efficiency: 18.9 },
    { channel: 'Google Ads', cost: 65, customers: 1200, efficiency: 18.5 },
    { channel: 'Email Marketing', cost: 12, customers: 320, efficiency: 26.7 },
    { channel: 'Content Marketing', cost: 35, customers: 680, efficiency: 19.4 },
    { channel: 'Referrals', cost: 25, customers: 450, efficiency: 18.0 },
    { channel: 'Direct Traffic', cost: 0, customers: 380, efficiency: 0 }
  ];
  
  export const marketComparisonData = [
    { competitor: 'Our Company', marketShare: 23.5, revenue: 2400000, growth: 15.2 },
    { competitor: 'Competitor A', marketShare: 28.2, revenue: 2880000, growth: 8.7 },
    { competitor: 'Competitor B', marketShare: 19.8, revenue: 2020000, growth: 12.1 },
    { competitor: 'Competitor C', marketShare: 15.3, revenue: 1560000, growth: 5.4 },
    { competitor: 'Others', marketShare: 13.2, revenue: 1350000, growth: 3.2 }
  ];
  
  export const seasonalTrendsData = [
    { season: 'Q1 Winter', sales2023: 180000, sales2024: 195000, growth: 8.3 },
    { season: 'Q2 Spring', sales2023: 220000, sales2024: 245000, growth: 11.4 },
    { season: 'Q3 Summer', sales2023: 280000, sales2024: 310000, growth: 10.7 },
    { season: 'Q4 Fall', sales2023: 320000, sales2024: 360000, growth: 12.5 }
  ];
  
  export const COLORS: ColorScheme = [
    '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'
  ];
  
  export const CHART_COLORS: Record<string, string> = {
    primary: '#3b82f6',
    secondary: '#10b981',
    accent: '#f59e0b',
    danger: '#ef4444',
    purple: '#8b5cf6',
    indigo: '#6366f1',
    teal: '#14b8a6',
    orange: '#f97316'
  };
  
  export const GRADIENT_COLORS = {
    blue: ['#3b82f6', '#1d4ed8'],
    green: ['#10b981', '#059669'],
    yellow: ['#f59e0b', '#d97706'],
    red: ['#ef4444', '#dc2626'],
    purple: ['#8b5cf6', '#7c3aed'],
    indigo: ['#6366f1', '#4f46e5']
  };
  
  export const salesData = {
    monthlyRevenue: monthlyRevenueData,
    salesTrends: salesTrendsData,
    productCategories: productCategoriesData,
    cumulativeGrowth: cumulativeGrowthData,
    priceVsUnits: priceVsUnitsData,
    regionalSales: regionalSalesData,
    performanceMetrics: performanceMetricsData,
    productDistribution: productDistributionData,
    salesFunnel: salesFunnelData,
    revenueProfit: revenueProfitData,
    customerDemographics: customerDemographicsData,
    topSellingProducts: topSellingProductsData,
    channelSales: channelSalesData,
    customerAcquisition: customerAcquisitionData,
    marketComparison: marketComparisonData,
    seasonalTrends: seasonalTrendsData
  };
  
  export const dataSummary = {
    totalDatasets: 16,
    totalDataPoints: 147,
    chartTypes: [
      'Bar Chart',
      'Line Chart', 
      'Pie Chart',
      'Area Chart',
      'Scatter Chart',
      'Donut Chart',
      'Radar Chart',
      'Treemap Chart',
      'Funnel Chart',
      'Composed Chart'
    ],
    lastUpdated: new Date().toISOString(),
    version: '1.0.0'
  };
  
  // Data validation utilities
  export const validateData = (data: any[], requiredFields: string[]): boolean => {
    if (!Array.isArray(data) || data.length === 0) return false;
    
    return data.every(item => 
      requiredFields.every(field => 
        item.hasOwnProperty(field) && item[field] !== null && item[field] !== undefined
      )
    );
  };
  
  // Data transformation utilities
  export const transformDataForChart = (data: any[], xKey: string, yKey: string) => {
    return data.map(item => ({
      x: item[xKey],
      y: item[yKey],
      ...item
    }));
  };
  
  export const aggregateDataByPeriod = (data: any[], groupByField: string) => {
    return data.reduce((acc, item) => {
      const key = item[groupByField];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});
  };
  
  export default salesData;
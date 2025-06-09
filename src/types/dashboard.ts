export interface StatCardProps {
    title: string;
    value: string;
    change: number;
    icon: React.ComponentType<{ className?: string }>;
    color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' | 'indigo';
  }
  
  export interface NavigationItem {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    active: boolean;
    badge?: number;
  }
  
  export interface ChartData {
    [key: string]: any;
  }
  
  export interface DashboardHeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    selectedTimeRange: string;
    setSelectedTimeRange: (range: string) => void;
    timeRanges: string[];
  }
  
  export interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    navigationItems: NavigationItem[];
  }
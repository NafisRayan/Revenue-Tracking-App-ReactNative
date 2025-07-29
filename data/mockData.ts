import { Transaction, RevenueMetrics, ChartData, BusinessMetric } from '@/types/financial';

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'income',
    amount: 2568.00,
    description: 'Client Payment - Project Alpha',
    category: 'Consulting',
    date: new Date('2024-01-15'),
    status: 'completed',
    merchant: 'Enterprise System',
    color: '#10B981'
  },
  {
    id: '2',
    type: 'income',
    amount: 1200.12,
    description: 'Product Sales Revenue',
    category: 'Sales',
    date: new Date('2024-01-14'),
    status: 'completed',
    merchant: 'Adv Company',
    color: '#3B82F6'
  },
  {
    id: '3',
    type: 'expense',
    amount: -389.00,
    description: 'Marketing Campaign',
    category: 'Marketing',
    date: new Date('2024-01-14'),
    status: 'completed',
    merchant: 'Print Angola',
    color: '#F59E0B'
  },
  {
    id: '4',
    type: 'income',
    amount: 160000.32,
    description: 'Major Contract Milestone',
    category: 'Contracts',
    date: new Date('2024-01-13'),
    status: 'completed',
    merchant: 'Enterprise System',
    color: '#10B981'
  },
  {
    id: '5',
    type: 'expense',
    amount: -150.00,
    description: 'Office Supplies',
    category: 'Operations',
    date: new Date('2024-01-13'),
    status: 'completed',
    merchant: 'James Scott',
    color: '#EF4444'
  },
  {
    id: '6',
    type: 'income',
    amount: 347.00,
    description: 'Subscription Revenue',
    category: 'Recurring',
    date: new Date('2024-01-12'),
    status: 'completed',
    merchant: 'Enterprise System',
    color: '#8B5CF6'
  }
];

export const revenueMetrics: RevenueMetrics = {
  totalRevenue: 45934.00,
  monthlyGrowth: 12.5,
  weeklyRevenue: 8432.50,
  dailyRevenue: 1329.02,
  transactionCount: 156,
  avgTransactionValue: 294.55
};

export const weeklyRevenueData: ChartData[] = [
  { x: 'Mon', y: 1200 },
  { x: 'Tue', y: 1850 },
  { x: 'Wed', y: 1329 },
  { x: 'Thu', y: 2100 },
  { x: 'Fri', y: 1650 },
  { x: 'Sat', y: 980 },
  { x: 'Sun', y: 1100 }
];

export const monthlyRevenueData: ChartData[] = [
  { x: 'Jan', y: 45934 },
  { x: 'Feb', y: 52100 },
  { x: 'Mar', y: 48750 },
  { x: 'Apr', y: 61200 },
  { x: 'May', y: 58900 },
  { x: 'Jun', y: 67500 }
];

export const categoryData: ChartData[] = [
  { x: 'Consulting', y: 35 },
  { x: 'Sales', y: 25 },
  { x: 'Contracts', y: 20 },
  { x: 'Recurring', y: 15 },
  { x: 'Other', y: 5 }
];

export const businessMetrics: BusinessMetric[] = [
  {
    title: 'Total Revenue',
    value: '$45,934.00',
    change: 12.5,
    icon: 'trending-up',
    color: '#10B981'
  },
  {
    title: 'Monthly Growth',
    value: '+12.5%',
    change: 2.3,
    icon: 'bar-chart',
    color: '#3B82F6'
  },
  {
    title: 'Active Clients',
    value: '24',
    change: 8.1,
    icon: 'users',
    color: '#8B5CF6'
  },
  {
    title: 'Avg Transaction',
    value: '$294.55',
    change: -1.2,
    icon: 'dollar-sign',
    color: '#F59E0B'
  }
];
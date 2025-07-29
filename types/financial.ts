export interface Transaction {
  id: string;
  type: 'income' | 'expense' | 'transfer';
  amount: number;
  description: string;
  category: string;
  date: Date;
  status: 'completed' | 'pending' | 'failed';
  merchant?: string;
  icon?: string;
  color?: string;
}

export interface RevenueMetrics {
  totalRevenue: number;
  monthlyGrowth: number;
  weeklyRevenue: number;
  dailyRevenue: number;
  transactionCount: number;
  avgTransactionValue: number;
}

export interface ChartData {
  x: string;
  y: number;
}

export interface BusinessMetric {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}
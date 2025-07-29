import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, TrendingUp, ChartPie as PieChart } from 'lucide-react-native';
import RevenueChart from '@/components/RevenueChart';
import MetricCard from '@/components/MetricCard';
import { weeklyRevenueData, monthlyRevenueData, businessMetrics } from '@/data/mockData';

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('Week');
  const periods = ['Week', 'Month', 'Quarter', 'Year'];

  const getChartData = () => {
    switch (selectedPeriod) {
      case 'Month':
        return monthlyRevenueData;
      case 'Week':
      default:
        return weeklyRevenueData;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Analytics</Text>
          <TouchableOpacity style={styles.calendarButton}>
            <Calendar size={24} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {periods.map((period) => (
              <TouchableOpacity
                key={period}
                style={[
                  styles.periodTab,
                  selectedPeriod === period && styles.activePeriodTab
                ]}
                onPress={() => setSelectedPeriod(period)}
              >
                <Text style={[
                  styles.periodTabText,
                  selectedPeriod === period && styles.activePeriodTabText
                ]}>
                  {period}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Key Metrics */}
        <View style={styles.metricsGrid}>
          {businessMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </View>

        {/* Revenue Trend Chart */}
        <RevenueChart
          data={getChartData()}
          title={`${selectedPeriod}ly Revenue Trend`}
          color="#10B981"
        />

        {/* Performance Summary */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <TrendingUp size={24} color="#10B981" />
            <Text style={styles.summaryTitle}>Performance Summary</Text>
          </View>
          <View style={styles.summaryStats}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>+24.5%</Text>
              <Text style={styles.statLabel}>Revenue Growth</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>156</Text>
              <Text style={styles.statLabel}>Total Transactions</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>$294.55</Text>
              <Text style={styles.statLabel}>Avg Transaction</Text>
            </View>
          </View>
        </View>

        {/* Insights */}
        <View style={styles.insightsCard}>
          <View style={styles.insightsHeader}>
            <PieChart size={24} color="#3B82F6" />
            <Text style={styles.insightsTitle}>Key Insights</Text>
          </View>
          <View style={styles.insightItem}>
            <View style={styles.insightDot} />
            <Text style={styles.insightText}>
              Revenue is up 24.5% compared to last month, primarily driven by consulting services
            </Text>
          </View>
          <View style={styles.insightItem}>
            <View style={[styles.insightDot, { backgroundColor: '#F59E0B' }]} />
            <Text style={styles.insightText}>
              Transaction volume increased by 15% with higher average transaction values
            </Text>
          </View>
          <View style={styles.insightItem}>
            <View style={[styles.insightDot, { backgroundColor: '#8B5CF6' }]} />
            <Text style={styles.insightText}>
              Recurring revenue streams show consistent growth pattern
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  calendarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  periodSelector: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  periodTab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#1F2937',
    borderWidth: 1,
    borderColor: '#374151',
  },
  activePeriodTab: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  periodTabText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  activePeriodTabText: {
    color: '#FFFFFF',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 14,
    marginBottom: 24,
  },
  summaryCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#374151',
  },
  summaryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  summaryStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  insightsCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#374151',
  },
  insightsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  insightsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 12,
  },
  insightItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  insightDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 12,
    marginTop: 6,
  },
  insightText: {
    flex: 1,
    fontSize: 14,
    color: '#D1D5DB',
    lineHeight: 20,
  },
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, User, ArrowUpRight } from 'lucide-react-native';
import MetricCard from '@/components/MetricCard';
import TransactionItem from '@/components/TransactionItem';
import RevenueChart from '@/components/RevenueChart';
import { revenueMetrics, businessMetrics, mockTransactions, weeklyRevenueData } from '@/data/mockData';

export default function Dashboard() {
  const recentTransactions = mockTransactions.slice(0, 5);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi Nesher,</Text>
            <Text style={styles.welcomeText}>Welcome back</Text>
          </View>
          <View style={styles.headerIcons}>
<TouchableOpacity style={styles.iconButton} onPress={() => console.log('Bell pressed')}>
  <Bell size={24} color="#9CA3AF" />
</TouchableOpacity>
<TouchableOpacity style={styles.iconButton} onPress={() => console.log('User pressed')}>
  <User size={24} color="#9CA3AF" />
</TouchableOpacity>
          </View>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Your Balance is</Text>
          <Text style={styles.balanceAmount}>${revenueMetrics.totalRevenue.toLocaleString()}</Text>
          <View style={styles.balanceActions}>
<TouchableOpacity style={styles.actionButton} onPress={() => console.log('Add Money pressed')}>
  <Text style={styles.actionButtonText}>Add Money</Text>
</TouchableOpacity>
<TouchableOpacity style={[styles.actionButton, styles.transferButton]} onPress={() => console.log('Transfer pressed')}>
  <Text style={styles.transferButtonText}>Transfer</Text>
</TouchableOpacity>
          </View>
        </View>

        {/* Metrics Grid */}
        <View style={styles.metricsGrid}>
          {businessMetrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </View>

        {/* Revenue Chart */}
        <RevenueChart
          data={weeklyRevenueData}
          title="Weekly Revenue Trend"
          color="#10B981"
        />

        {/* Recent Transactions */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
<TouchableOpacity style={styles.viewAllButton} onPress={() => console.log('View All pressed')}>
  <Text style={styles.viewAllText}>View All</Text>
  <ArrowUpRight size={16} color="#10B981" />
</TouchableOpacity>
        </View>

        <View style={styles.transactionsList}>
          {recentTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              onPress={() => console.log('Transaction pressed:', transaction.id)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const horizontalPadding = width * 0.05; // 5% of screen width
const cardMargin = width * 0.025; // 2.5% of screen width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
    paddingHorizontal: horizontalPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  greeting: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },
  balanceCard: {
    backgroundColor: '#F59E0B',
    borderRadius: 20,
    padding: width * 0.06,
    marginHorizontal: 0,
    marginBottom: 24,
    marginTop: 8,
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  balanceActions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 12,
  },
  actionButtonText: {
    color: '#F59E0B',
    fontWeight: '600',
  },
  transferButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  transferButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
    marginBottom: 24,
    gap: cardMargin,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
    marginRight: 4,
  },
  transactionsList: {
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
});

import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TrendingUp, TrendingDown, ChartBar as BarChart, Users, DollarSign } from 'lucide-react-native';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

const iconMap = {
  'trending-up': TrendingUp,
  'bar-chart': BarChart,
  'users': Users,
  'dollar-sign': DollarSign,
};

export default function MetricCard({ title, value, change, icon, color }: MetricCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap] || TrendingUp;
  const isPositive = change >= 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
          <IconComponent size={24} color={color} />
        </View>
        <View style={styles.changeContainer}>
          {isPositive ? (
            <TrendingUp size={16} color="#10B981" />
          ) : (
            <TrendingDown size={16} color="#EF4444" />
          )}
          <Text style={[styles.changeText, { color: isPositive ? '#10B981' : '#EF4444' }]}>
            {Math.abs(change)}%
          </Text>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = width > 500 ? width * 0.44 : width * 0.9; // 2 cards per row on tablet, 1 per row on mobile

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: width * 0.045,
    width: cardWidth,
    minWidth: 140,
    maxWidth: 320,
    marginHorizontal: 6,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#374151',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#065F46',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  changeText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  title: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Transaction } from '@/types/financial';
import { ChevronRight } from 'lucide-react-native';

interface TransactionItemProps {
  transaction: Transaction;
  onPress?: () => void;
}

export default function TransactionItem({ transaction, onPress }: TransactionItemProps) {
  const formatAmount = (amount: number) => {
    const absAmount = Math.abs(amount);
    const sign = amount >= 0 ? '+' : '-';
    return `${sign}$${absAmount.toFixed(2)}`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.leftSection}>
        <View style={[styles.iconContainer, { backgroundColor: transaction.color + '20' }]}>
          <View style={[styles.iconDot, { backgroundColor: transaction.color }]} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.merchant}>{transaction.merchant || transaction.description}</Text>
          <Text style={styles.category}>{transaction.category}</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <Text style={[
          styles.amount,
          { color: transaction.amount >= 0 ? '#10B981' : '#EF4444' }
        ]}>
          {formatAmount(transaction.amount)}
        </Text>
        <Text style={styles.date}>{formatDate(transaction.date)}</Text>
      </View>
      <ChevronRight size={20} color="#6B7280" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  textContainer: {
    flex: 1,
  },
  merchant: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  category: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  rightSection: {
    alignItems: 'flex-end',
    marginRight: 12,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#6B7280',
  },
});
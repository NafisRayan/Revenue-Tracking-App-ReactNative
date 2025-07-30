import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FileText, Download, Mail, Calendar, Filter } from 'lucide-react-native';

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState('Revenue');
  
  const reportTypes = ['Revenue', 'Expenses', 'Profit', 'Cash Flow'];
  
  const reports = [
    {
      id: '1',
      title: 'Monthly Revenue Report',
      type: 'Revenue',
      period: 'January 2024',
      status: 'Ready',
      size: '2.4 MB',
      date: '2024-01-15',
    },
    {
      id: '2',
      title: 'Weekly Performance Summary',
      type: 'Performance',
      period: 'Week 2, Jan 2024',
      status: 'Processing',
      size: '1.8 MB',
      date: '2024-01-14',
    },
    {
      id: '3',
      title: 'Quarterly Business Analysis',
      type: 'Analysis',
      period: 'Q4 2023',
      status: 'Ready',
      size: '5.2 MB',
      date: '2024-01-10',
    },
    {
      id: '4',
      title: 'Expense Breakdown Report',
      type: 'Expenses',
      period: 'December 2023',
      status: 'Ready',
      size: '3.1 MB',
      date: '2024-01-05',
    },
  ];

  const quickStats = [
    { title: 'Reports Generated', value: '24', change: '+3' },
    { title: 'Avg Report Size', value: '2.8 MB', change: '-0.2' },
    { title: 'Export Success Rate', value: '98.5%', change: '+1.2%' },
    { title: 'Processing Time', value: '2.3 min', change: '-0.5' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Reports</Text>
<TouchableOpacity style={styles.filterButton} onPress={() => console.log('Filter pressed')}>
  <Filter size={24} color="#9CA3AF" />
</TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
<TouchableOpacity style={styles.actionCard} onPress={() => console.log('Generate Report pressed')}>
  <FileText size={24} color="#10B981" />
  <Text style={styles.actionTitle}>Generate Report</Text>
  <Text style={styles.actionSubtitle}>Create new custom report</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionCard} onPress={() => console.log('Schedule Report pressed')}>
  <Calendar size={24} color="#3B82F6" />
  <Text style={styles.actionTitle}>Schedule Report</Text>
  <Text style={styles.actionSubtitle}>Automate report generation</Text>
</TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <Text style={styles.sectionTitle}>Report Statistics</Text>
          <View style={styles.statsGrid}>
            {quickStats.map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statTitle}>{stat.title}</Text>
                <Text style={styles.statChange}>{stat.change}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Report Type Filter */}
        <View style={styles.filterTabs}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {reportTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.filterTab,
                  selectedReport === type && styles.activeFilterTab
                ]}
                onPress={() => setSelectedReport(type)}
              >
                <Text style={[
                  styles.filterTabText,
                  selectedReport === type && styles.activeFilterTabText
                ]}>
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Reports List */}
        <View style={styles.reportsSection}>
          <Text style={styles.sectionTitle}>Available Reports</Text>
          {reports.map((report) => (
            <View key={report.id} style={styles.reportCard}>
              <View style={styles.reportHeader}>
                <View style={styles.reportInfo}>
                  <Text style={styles.reportTitle}>{report.title}</Text>
                  <Text style={styles.reportPeriod}>{report.period}</Text>
                </View>
                <View style={[
                  styles.statusBadge,
                  report.status === 'Ready' ? styles.readyStatus : styles.processingStatus
                ]}>
                  <Text style={[
                    styles.statusText,
                    report.status === 'Ready' ? styles.readyText : styles.processingText
                  ]}>
                    {report.status}
                  </Text>
                </View>
              </View>
              
              <View style={styles.reportDetails}>
                <Text style={styles.reportSize}>{report.size}</Text>
                <Text style={styles.reportDate}>{report.date}</Text>
              </View>
              
              <View style={styles.reportActions}>
<TouchableOpacity style={styles.actionButton} onPress={() => console.log('Download pressed', report.id)}>
  <Download size={16} color="#10B981" />
  <Text style={styles.actionButtonText}>Download</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.actionButton} onPress={() => console.log('Email pressed', report.id)}>
  <Mail size={16} color="#3B82F6" />
  <Text style={styles.actionButtonText}>Email</Text>
</TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Export Options */}
        <View style={styles.exportSection}>
          <Text style={styles.sectionTitle}>Export Options</Text>
          <View style={styles.exportGrid}>
{['PDF', 'Excel', 'CSV', 'JSON'].map((format) => (
  <TouchableOpacity key={format} style={styles.exportButton} onPress={() => console.log('Export pressed', format)}>
    <Text style={styles.exportButtonText}>{format}</Text>
  </TouchableOpacity>
))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const horizontalPadding = width * 0.05;
const cardMargin = width * 0.025;

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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1F2937',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 0,
    marginBottom: 24,
    gap: cardMargin,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: width * 0.05,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#374151',
    alignItems: 'center',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 12,
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
  },
  statsContainer: {
    paddingHorizontal: 0,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statCard: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: width * 0.04,
    width: '48%',
    marginRight: '2%',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#374151',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10B981',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  statChange: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
  },
  filterTabs: {
    paddingHorizontal: 0,
    marginBottom: 20,
  },
  filterTab: {
    paddingHorizontal: width * 0.05,
    paddingVertical: width * 0.025,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: '#1F2937',
    borderWidth: 1,
    borderColor: '#374151',
  },
  activeFilterTab: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  filterTabText: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '600',
  },
  activeFilterTabText: {
    color: '#FFFFFF',
  },
  reportsSection: {
    paddingHorizontal: 0,
    marginBottom: 24,
  },
  reportCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: width * 0.06,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#374151',
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  reportHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  reportPeriod: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  readyStatus: {
    backgroundColor: '#065F46',
  },
  processingStatus: {
    backgroundColor: '#92400E',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  readyText: {
    color: '#10B981',
  },
  processingText: {
    color: '#F59E0B',
  },
  reportDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  reportSize: {
    fontSize: 14,
    color: '#6B7280',
  },
  reportDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  reportActions: {
    flexDirection: 'row',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 12,
  },
  actionButtonText: {
    fontSize: 14,
    color: '#D1D5DB',
    fontWeight: '600',
    marginLeft: 8,
  },
  exportSection: {
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  exportGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  exportButton: {
    backgroundColor: '#1F2937',
    borderRadius: 12,
    padding: width * 0.04,
    width: '23%',
    marginRight: '2%',
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  exportButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

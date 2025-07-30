import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { VictoryArea, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import { Svg, Defs, LinearGradient, Stop } from 'react-native-svg';
import { ChartData } from '@/types/financial';

const { width } = Dimensions.get('window');
const chartWidth = width * 0.9; // 90% of screen width
const chartHeight = chartWidth * 0.6; // Maintain aspect ratio (e.g., 16:9 or 4:3)

interface RevenueChartProps {
  data: ChartData[];
  title: string;
  color?: string;
}

export default function RevenueChart({ data, title, color = '#10B981' }: RevenueChartProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Svg width={chartWidth} height={chartHeight}>
        <Defs>
          <LinearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0%" stopColor={color} stopOpacity="0.8" />
            <Stop offset="100%" stopColor={color} stopOpacity="0.1" />
          </LinearGradient>
        </Defs>
        <VictoryChart
          theme={VictoryTheme.material}
          width={chartWidth}
          height={chartHeight}
          padding={{ left: 50, top: 10, right: 20, bottom: 50 }}
          style={{
            background: { fill: 'transparent' }
          }}
        >
          <VictoryAxis
            dependentAxis
            style={{
              axis: { stroke: '#374151' },
              tickLabels: { fill: '#9CA3AF', fontSize: 12 },
              grid: { stroke: '#374151', strokeWidth: 0.5 }
            }}
            tickFormat={(value) => `$${value}`}
          />
          <VictoryAxis
            style={{
              axis: { stroke: '#374151' },
              tickLabels: { fill: '#9CA3AF', fontSize: 12 }
            }}
          />
          <VictoryArea
            data={data}
            style={{
              data: {
                fill: color,
                stroke: color,
                strokeWidth: 2,
                fillOpacity: 0.3
              }
            }}
            animate={{
              duration: 1000,
              onLoad: { duration: 500 }
            }}
          />
        </VictoryChart>
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: width * 0.05,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#374151',
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
});

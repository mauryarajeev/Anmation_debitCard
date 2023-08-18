import React from 'react';
import { View, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const ProgressChartGraph = () => {
  return (
    <ProgressChart
    data={[0.4, 0.6, 0.8]}
    width={400}
    height={200}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
  />
  );
};

export default ProgressChartGraph;

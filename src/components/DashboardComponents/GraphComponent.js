import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GraphComponent = () => {
  // Dummy data for the chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [2, 3, 5, 4, 6, 8],
        color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`,
      },
    ],
  };

  return (
    <View style={{ marginVertical: 20 }}>
      <LineChart
        data={data}
        width={400} // from react-native
        height={200}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: '#f0f0f0',
          backgroundGradientTo: '#f0f0f0',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 128, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        bezier
        style={{ marginVertical: 8, borderRadius: 16 }}
      />
    </View>
  );
};

export default GraphComponent;

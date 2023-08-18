import React from 'react';
import { View, StyleSheet } from 'react-native';
 import GraphComponent from '../components/DashboardComponents/GraphComponent';
 import PieChartComponent from '../components/DashboardComponents/PieChartComponent';
 import ProgressChartGraph from '../components/DashboardComponents/ProgressChart';
 import ExpensesComponent from '../components/DashboardComponents/ExpensesComponent';
 import RemainingBalanceComponent from '../components/DashboardComponents/RemainingBalanceComponent';
 import OrderListComponent from '../components/DashboardComponents/OrderListComponent';
 import PaymentHistoryComponent from '../components/DashboardComponents/PaymentHistoryComponent';

const DashSreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.componentRow}>
        <View style={styles.component}>
          <GraphComponent />
        </View>
        <View style={styles.component}>
          <PieChartComponent />
        </View>
      </View>

      <View style={styles.componentRow}>
        <View style={styles.component}>
          <ProgressChartGraph />
        </View>
        <View style={styles.component}>
          <ExpensesComponent />
        </View>
      </View>

      <View style={styles.componentRow}>
        <View style={styles.component}>
          <RemainingBalanceComponent />
        </View>
        <View style={styles.component}>
          <OrderListComponent />
        </View>
      </View>

      <View style={styles.componentRow}>
        <View style={styles.component}>
          <PaymentHistoryComponent />
        </View>
        {/* Add more components here if needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1,
      },
      componentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2, // Adjust the margin between rows
      },
      component: {
        flex: 1,
        marginLeft: 10, // Adjust the margin between components
        borderColor: '#ccc',
      },
});

export default DashSreens;

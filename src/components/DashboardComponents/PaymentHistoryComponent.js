import React from 'react';
import { View, Text, FlatList } from 'react-native';

const PaymentHistoryComponent = () => {
  // Dummy payment history data
  const paymentHistory = [
    { id: '1', date: '2023-08-01', amount: '$50.00' },
    { id: '2', date: '2023-08-10', amount: '$30.00' },
    { id: '3', date: '2023-08-15', amount: '$70.00' },
    // Add more payment history entries here
  ];

  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Payment History
      </Text>
      <FlatList
        data={paymentHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{ flex: 1 }}>{item.date}</Text>
            <Text style={{ flex: 1 }}>{item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default PaymentHistoryComponent;

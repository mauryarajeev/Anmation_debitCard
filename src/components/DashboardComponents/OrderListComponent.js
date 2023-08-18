import React from 'react';
import { View, Text, FlatList } from 'react-native';

const OrderListComponent = () => {
  // Dummy order data
  const orders = [
    { id: '1', title: 'Order 1', amount: '$50.00' },
    { id: '2', title: 'Order 2', amount: '$30.00' },
    { id: '3', title: 'Order 3', amount: '$70.00' },
    // Add more orders here
  ];

  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Recent Orders
      </Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.title}:   {item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default OrderListComponent;

import React from 'react';
import { View, Text } from 'react-native';

const RemainingBalanceComponent = () => {
  // Dummy data
  const creditLimit = 1000;
  const currentBalance = 300;

  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Credit Card Balance
      </Text>
      <Text>Credit Limit:   ${creditLimit}</Text>
      <Text>Current Balance:    ${currentBalance}</Text>
      <Text>Remaining Balance:    ${creditLimit - currentBalance}</Text>
    </View>
  );
};

export default RemainingBalanceComponent;

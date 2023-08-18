import React from 'react';
import { View, Text } from 'react-native';

const ExpensesComponent = () => {
  // Dummy expenses data
  const expenses = [
    { id: '1', category: 'Food', amount: '$30.00' },
    { id: '2', category: 'Shopping', amount: '$50.00' },
    { id: '3', category: 'Entertainment', amount: '$20.00' },
    // Add more expenses here
  ];

  return (
    <View style={{ paddingHorizontal: 20, marginBottom: 20,height:200,width:400 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Monthly Expenses
      </Text>
      {expenses.map((expense) => (
        <View key={expense.id} style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Text style={{ flex: 1 }}>{expense.category}:    {expense.amount}</Text>
          {/* <Text>{expense.amount}</Text> */}
        </View>
      ))}
    </View>
  );
};

export default ExpensesComponent;


import React from 'react';
import MainScreen from './src/screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 // Update the path


const Stack = createStackNavigator();

const App = () => {
  return <MainScreen />;
};

export default App;

// function CreditDashboard() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Dashboard">
//         <Stack.Screen name="Dashboard" component={DashboardScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



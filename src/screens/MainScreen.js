// import React from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import CardList from '../components/CardList';
// import BarChart from '../components/DashboardComponents/BarChart';
// import GraphComponent from '../components/DashboardComponents/GraphComponent';
// import PieChartComponent from '../components/DashboardComponents/PieChartComponent';
// import ProgressChartGraph from '../components/DashboardComponents/ProgressChart';
// import ExpensesComponent from '../components/DashboardComponents/ExpensesComponent';
// import RemainingBalanceComponent from '../components/DashboardComponents/RemainingBalanceComponent';
// import OrderListComponent from '../components/DashboardComponents/OrderListComponent';
// import PaymentHistoryComponent from '../components/DashboardComponents/PaymentHistoryComponent';

// const sampleData = [
//   { id: '1', bank: "Bank Of Baroda", cardtype: "Debit Card", cardNumber: '1234 5678 9012 3456', name: 'Rajeev Kumar' },
//   { id: '2', bank: "Bank Of Baroda", cardtype: "Debit Card", cardNumber: '1234 5678 9012 3456', name: 'Rajeev Kumar' },
//   { id: '3', bank: "Bank Of Baroda", cardtype: "Debit Card", cardNumber: '1234 5678 9012 3456', name: 'Rajeev Kumar' },
//   // Add more sample data...
// ];

// const MainScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         {sampleData.map((item) => (
//           <CardList key={item.id} data={item} />
//         ))}
//       </ScrollView>
//       {/* <GraphComponent /> */}
//       {/* <PieChartComponent /> */}
//       {/* <ProgressChartGraph /> */}
//       {/* <ExpensesComponent /> */}
//       {/* <RemainingBalanceComponent /> */}
//       {/* <OrderListComponent /> */}
//       {/* <PaymentHistoryComponent /> */}
//       {/* <BarChart /> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
// });

// export default MainScreen;


// import React from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';
// import CardList from '../components/CardList';
// import DashSreens from './DashSceens';

// const sampleData = [
//   { id: '1',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//   { id: '2',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
//   { id: '3',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
//   { id: '4',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
//   { id: '5',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
//   { id: '6',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
//   { id: '7',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//   { id: '8',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
//   { id: '9',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
//   { id: '10',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
//   { id: '11',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
//   { id: '12',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
//   { id: '13',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//   { id: '14',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
//   { id: '15',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
//   { id: '16',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
//   { id: '17',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
//   { id: '18',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
//   { id: '19',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//   { id: '20',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
 
 
//   // Add more sample data...
// ];

// const MainScreen = () => {
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//         {sampleData.map((item) => (
//           <CardList key={item.id} data={sampleData} />
//         ))}
//       </ScrollView>
//       <DashSreens />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
  
// });

// export default MainScreen;


// import React, { useState } from 'react';
// import { View, ScrollView, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import CardList from '../components/CardList';
// import DashSreens from './DashSceens';

// const sampleData = [
//   // Your sample data...
//    { id: '1',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//    { id: '2',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
//    { id: '3',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
//    { id: '4',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
//    { id: '5',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
//    { id: '6',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
//    { id: '7',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//    { id: '8',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
//    { id: '9',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
//    { id: '10',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
//    { id: '11',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
//    { id: '12',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
//    { id: '13',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//    { id: '14',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
//    { id: '15',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
//    { id: '16',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
//    { id: '17',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
//    { id: '18',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
//    { id: '19',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
//    { id: '20',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
 
// ];

// const MainScreen = () => {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedData, setSelectedData] = useState(null);

//   const openModal = (data) => {
//     setSelectedData(data);
//     setIsModalVisible(true);
//   };

//   const closeModal = () => {
//     setSelectedData(null);
//     setIsModalVisible(false);
//   };

//   const renderModalContent = () => {
//     if (!selectedData) {
//       return null;
//     }

//     return (
//       <Modal visible={isModalVisible} animationType="slide" transparent>
//         <View style={styles.modalContainer}>
//           <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
//             <Text style={styles.closeButtonText}>X</Text>
//           </TouchableOpacity>
//           <DashSreens data={selectedData} />
//         </View>
//       </Modal>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//         {sampleData.map((item) => (
//           <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
//             <CardList key={item.id} data={sampleData} />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       {renderModalContent()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     padding: 10,
//     zIndex: 1,
//   },
//   closeButtonText: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   // Other styles...
// });

// export default MainScreen;



import React, { useState } from 'react';
import { View, ScrollView, Modal, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CardList from '../components/CardList';
import DashSreens from './DashSceens';
import GraphComponent from '../components/DashboardComponents/GraphComponent';
import PieChartComponent from '../components/DashboardComponents/PieChartComponent';
import ProgressChartGraph from '../components/DashboardComponents/ProgressChart';
import ExpensesComponent from '../components/DashboardComponents/ExpensesComponent';
import RemainingBalanceComponent from '../components/DashboardComponents/RemainingBalanceComponent';
import OrderListComponent from '../components/DashboardComponents/OrderListComponent';
import PaymentHistoryComponent from '../components/DashboardComponents/PaymentHistoryComponent';

const sampleData = [
  // Your sample data...   
  { id: '1',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
  { id: '2',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
  { id: '3',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
  { id: '4',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
  { id: '5',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
  { id: '6',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
  { id: '7',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
  { id: '8',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
  { id: '9',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
  { id: '10',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
  { id: '11',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
  { id: '12',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
  { id: '13',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
  { id: '14',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
  { id: '15',bank:"ICICI BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'RajKumar Rao' },
  { id: '16',bank:"STATE BANK OF INDIA", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Sam vills' },
  { id: '17',bank:"INDIAN BANK", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Jhon Rock' },
  { id: '18',bank:"AXIX BANK", cardtype:"Credit Card",cardNumber: '1234 5678 9012 3456', name:'Aditya Premchandra' },
  { id: '19',bank:"BANK OF BARODA", cardtype:"Debit Card",cardNumber: '1234 5678 9012 3456', name:'Rajeev  Kumar' },
  { id: '20',bank:"HDFC BANK", cardtype:"Credit",cardNumber: '1234 5678 9012 3456', name:'Ram Singh' },
];

const MainScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const openModal = (data) => {
    setSelectedData(data);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setSelectedData(null);
    setIsModalVisible(false);
  };

  const renderModalContent = () => {
    if (!selectedData) {
      return null;
    }

    return (
      <Modal visible={isModalVisible} animationType="slide" >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          {/* <DashSreens data={selectedData} /> */}
          <View style={styles.componentRow}>
            <View style={styles.component}>
              <GraphComponent />
            </View>
            <View style={styles.component}>
              <PieChartComponent />
            </View>
            <View style={styles.component}>
              <ProgressChartGraph />
            </View>
          </View>
          <View style={styles.componentRow}>
            <View style={styles.component}>
              <ExpensesComponent />
            </View>
            <View style={styles.component}>
              <RemainingBalanceComponent />
            </View>
            <View style={styles.component}>
              <OrderListComponent />
            </View>
            <View style={styles.component}>
              <PaymentHistoryComponent />
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {sampleData.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
            <CardList key={item.id} data={sampleData} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {renderModalContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  componentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20, // Adjust the margin between rows
  },
  component: {
    flex: 1,
    marginLeft: 10, // Adjust the margin between components
    borderColor: '#ccc',
  },
  // Other styles...
});

export default MainScreen;


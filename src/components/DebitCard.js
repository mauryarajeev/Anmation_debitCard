// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const DebitCard = ({ cardData }) => {
//   return (
//     <View style={styles.cardContainer}>
//       {/* Your card UI here */}
//       <Text>{cardData.bank}</Text>
//        <Text>{cardData.cardtype}</Text>
//        <Text>{cardData.cardNumber}</Text>
//        <Text>{cardData.name}</Text>
//       {/* ... other card details */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
//     width: 300,
//     height: 180,
//     margin: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     // Other styles...
//   },
// });

// export default DebitCard;


import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const DebitCard = ({ cardData }) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require('../Image/creditCradimage.jpg')}
        style={styles.cardBackground}
        resizeMode="cover"
      >
        <View style={styles.cardContent}>
          <Text style={styles.bankText}>{cardData.bank}</Text>
          <Text style={styles.cardTypeText}>{cardData.cardtype}</Text>
          <Text style={styles.cardNumberText}>{cardData.cardNumber}</Text>
          <Text style={styles.nameText}>{cardData.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 400, // Adjust as needed
    height:200,
    marginRight: 10, // Adjust spacing between cards
  },
  cardBackground: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContent: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height:200,
    width:400
  },
  bankText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
  },
  cardTypeText: {
    fontSize: 14,
    color: '#FFF',
    marginBottom: 8,
  },
  cardNumberText: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 8,
  },
  nameText: {
    fontSize: 14,
    color: '#FFF',
  },
});

export default DebitCard;


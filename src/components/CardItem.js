import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

const CardWidth = Dimensions.get('window').width - 32; // Adjust as needed

const CardItem = ({ data, scrollX, index }) => {
  const inputRange = [(index - 1) * CardWidth, index * CardWidth, (index + 1) * CardWidth];
  const translateX = interpolate(scrollX.value, inputRange, [-CardWidth, 0, CardWidth], Extrapolate.CLAMP);

  return (
    <Animated.View style={[styles.card, { transform: [{ translateX }] }]}>
      {/* Render your card content here */}
      <Text>{data.cardNumber}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CardWidth,
    height: 200,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardItem;

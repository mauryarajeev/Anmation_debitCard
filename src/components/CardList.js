import React, { useRef } from 'react';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Animated, View, FlatList, StyleSheet } from 'react-native';
import DebitCard from '../components/DebitCard';

const CardList = ({ data }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const offsetX = useRef(new Animated.Value(0)).current;

  const handlePanGesture = Animated.event(
    [{ nativeEvent: { translationX: offsetX } }],
    { useNativeDriver: false }
  );

  const handlePanStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      Animated.spring(offsetX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler
        onGestureEvent={handlePanGesture}
        onHandlerStateChange={handlePanStateChange}
      >
        <Animated.View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            inverted // <-- Inverted to achieve left-to-right scrolling
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            renderItem={({ item, index }) => {
              const animatedCardStyle = {
                transform: [
                  {
                    translateX: Animated.add(
                      scrollX,
                      Animated.multiply(offsetX, -1)
                    ),
                  },
                ],
              };
              return (
                <Animated.View style={[styles.cardContainer, animatedCardStyle]}>
                  <DebitCard cardData={item} />
                </Animated.View>
              );
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: 300, // Adjust as needed
    marginRight: 10, // Adjust spacing between cards
  },
});

export default CardList;

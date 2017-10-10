import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

export const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sky}>
        <Text style={styles.welcomeText}>
          What's a good day look like for you?
        </Text>
      </View>
      <View style={styles.mountainsContainer}>
        <Image
          source={require('../../assets/welcome-logo.png')}
          fadeDuration={0}
          style={styles.mountains}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.grass} />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  sky: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  mountainsContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mountains: {
    width: '100%',
  },
  grass: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcomeText: {
    fontSize: 28,
    textAlign: 'center',
  },
});
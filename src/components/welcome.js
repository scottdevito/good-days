import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Button } from 'react-native-elements';

export const Welcome = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <View style={styles.sky}>
        <Text style={styles.welcomeText}>
          What does your best day look like?
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
      <View style={styles.grass}>
        <Button
          title="Let's Begin"
          onPress={() => {
            navigate('mainFlow');
          }}
          backgroundColor={'#ff8a65'}
          fontSize={20}
          large
          raised
        />
      </View>
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
    backgroundColor: '#8bf6ff',
  },
  mountainsContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mountains: {
    width: '100%',
  },
  grass: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#e1ffb1',
  },
  welcomeText: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 10,
  },
});

import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

import { DayFragment } from './src/components/day_fragment';
import DayScreen from './src/screens/day_screen';

const dayData = {
  morningData: {
    name: 'Morning',
    fragmentColor: '#56CCF2',
    weather: 'rain',
    items: [
      {
        title: 'Cold shower',
        description: 'Take a cold shower.',
        complete: false,
      },
      {
        title: 'Read a book',
        description: 'Read an interesting book.',
        complete: true,
      },
    ],
  },
  afternoonData: {
    name: 'Afternoon',
    fragmentColor: '#F2C94C',
    weather: 'rain',
    items: [
      {
        title: 'Yoga class',
        description: 'Emerge vinyassa class.',
        complete: false,
      },
      {
        title: 'Meditate',
        description: 'Meditate for 15 minutes.',
        complete: true,
      },
      {
        title: 'Work at coffee shop',
        description: 'Do some programming at a coffee shop.',
        complete: false,
      },
    ],
  },
  eveningData: {
    name: 'Evening',
    fragmentColor: '#F2994A',
    weather: 'rain',
    items: [
      {
        title: 'Cold shower',
        description: 'Take a cold shower.',
        complete: false,
      },
      {
        title: 'Read a book',
        description: 'Read an interesting book.',
        complete: true,
      },
    ],
  },
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DayScreen dayData={dayData} />
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  fragmentsContainer: {
    width: width,
    height: 500,
    paddingVertical: 50,
  },
});

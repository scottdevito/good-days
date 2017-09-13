import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

const dayData = {
  morningData: {
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
        <View style={[styles.dayHeader]}>
          <Text h4 style={styles.day}>
            Monday
          </Text>
          <Text style={styles.date}>October 3rd</Text>
        </View>
        <ScrollView style={styles.fragmentsContainer}>
          <View style={styles.morningFragment}>
            <Text style={styles.fragmentText}>Morning</Text>
          </View>
          <View style={styles.afternoonFragment}>
            <Text style={styles.fragmentText}>Afternoon</Text>
          </View>
          <View style={styles.eveningFragment}>
            <Text style={styles.fragmentText}>Evening</Text>
          </View>
        </ScrollView>
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
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    position: 'absolute',
    paddingTop: Constants.statusBarHeight,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#4F4F4F',
    zIndex: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  day: {
    color: '#ffffff',
  },
  date: {
    color: '#ffffff',
  },
  fragmentsContainer: {
    width: width,
    height: 500,
    paddingVertical: 50,
  },
  morningFragment: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: 80,
    backgroundColor: '#56CCF2',
  },
  afternoonFragment: {
    width: width,
    height: 80,
    backgroundColor: '#F2C94C',
  },
  eveningFragment: {
    width: width,
    height: 80,
    backgroundColor: '#F2994A',
  },
  fragmentText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

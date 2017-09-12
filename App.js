import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

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
});

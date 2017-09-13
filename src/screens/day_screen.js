import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Constants } from 'expo';

import { DayFragment } from '../components/day_fragment';

export default class DayScreen extends Component {
  _renderFragment({ fragmentColor }) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          width: width,
          height: 80,
          backgroundColor: fragmentColor,
        }}
      >
        <Text style={styles.fragmentText}>Morning</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <View style={[styles.dayHeader]}>
          <Text h4 style={styles.day}>
            Monday
          </Text>
          <Text style={styles.date}>October 3rd</Text>
        </View>
        <ScrollView style={styles.fragmentsContainer}>
          <DayFragment
            _renderFragment={this._renderFragment}
            data={this.props.dayData.morningData}
          />
          <DayFragment
            _renderFragment={this._renderFragment}
            data={this.props.dayData.afternoonData}
          />
          <DayFragment
            _renderFragment={this._renderFragment}
            data={this.props.dayData.eveningData}
          />
        </ScrollView>
      </View>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  dayHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    position: 'absolute',
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
    paddingVertical: 75,
  },
});

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { StatusBar } from '../components/status_bar';

export default class AllMyItemsScreen extends Component {
  static navigationOptions = {
    gesturesEnabled: false,
  };

  render() {
    return (
      <View>
        <StatusBar />
        <Text>All my items</Text>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class AllMyItemsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'All My Items',
    gesturesEnabled: false,
  };

  render() {
    return (
      <View>
        <Text>All my items</Text>
      </View>
    );
  }
}

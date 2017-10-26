import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import DayScreen from './src/screens/day_screen';
import { WelcomeScreen } from './src/screens/welcome_screen';
import AllMyItemsScreen from './src/screens/all_my_items_screen';

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator({
      welcome: {
        screen: WelcomeScreen,
        navigationOptions: ({ navigation }) => ({
          header: null,
        }),
      },
      mainFlow: {
        screen: DrawerNavigator({
          dayScreen: {
            screen: DayScreen,
          },
          allMyItems: {
            screen: AllMyItemsScreen,
          },
        }),
        navigationOptions: ({ navigation }) => ({
          header: null,
        }),
      },
    });

    return <MainNavigator />;
  }
}

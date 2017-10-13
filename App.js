import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

import DayScreen from './src/screens/day_screen';
import { WelcomeScreen } from './src/screens/welcome_screen';

export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: {
        screen: WelcomeScreen,
        navigationOptions: ({ navigation }) => ({
          tabBarVisible: false,
        }),
      },
      mainFlow: {
        screen: DrawerNavigator({
          dayScreen: {
            screen: DayScreen,
            navigationOptions: ({ navigation }) => ({
              tabBarVisible: false,
            }),
          },
        }),
      },
    });

    return <MainNavigator />;
  }
}

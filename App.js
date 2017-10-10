import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Constants } from 'expo';
import { TabNavigator, StackNavigator } from 'react-navigation';

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
      dayScreen: {
        screen: DayScreen,
        navigationOptions: ({ navigation }) => ({
          tabBarVisible: false,
        }),
      },
    });

    return <MainNavigator />;
  }
}

// Old styles and height offset for status bar from before routing
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
});

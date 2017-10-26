import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

export const StatusBar = () => <View style={styles.statusBar} />;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight,
    width: width,
    backgroundColor: '#272727',
  },
});

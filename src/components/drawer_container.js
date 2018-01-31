import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class DrawerContainer extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigation.navigate('dayScreen')}
          style={styles.uglyDrawerItem}
        >
          Today
        </Text>
        <Text
          onPress={() => navigation.navigate('allMyItems')}
          style={styles.uglyDrawerItem}
        >
          All Items
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    padding: 15,
    margin: 5,
    textAlign: 'center',
  },
});

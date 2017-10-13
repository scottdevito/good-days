import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const DayHeader = ({ toggleDrawer }) => {
  return (
    <View style={styles.dayHeader}>
      <MaterialCommunityIcons
        name="menu"
        size={34}
        color="white"
        onPress={() => {
          toggleDrawer('DrawerToggle');
        }}
      />
      <View style={styles.dayHeaderInfo}>
        <Text h4 style={styles.day}>
          Monday
        </Text>
        <Text style={styles.date}>October 3rd</Text>
      </View>
      <MaterialCommunityIcons name="dots-vertical" size={34} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  dayHeader: {
    flex: 0.12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 75,
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: '#4F4F4F',
    zIndex: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
  },
  dayHeaderInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  day: {
    color: '#ffffff',
    fontSize: 22,
  },
  date: {
    color: '#ffffff',
    fontSize: 12,
  },
});

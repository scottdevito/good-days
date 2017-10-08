import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Welcome = () => {
  return (
    <View>
      <View style={styles.sky}>
        <Text style={welcomeText}>What's a good day look like for you?</Text>
      </View>
      <View style={styles.mountains} />
      <View style={styles.grass} />
    </View>
  );
};

const styles = StyleSheet.create({
  sky: {
    flex: 2,
    backgroundColor: "white"
  },
  mountains: {
    height: 1,
  },
  grass: {
    flex: 1,
    color: "#ffffff"
  },
  welcomeText: {
    fontSize: 22
  }
});

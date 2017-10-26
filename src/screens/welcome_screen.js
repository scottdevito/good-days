import React from 'react';
import { View } from 'react-native';
import { Welcome } from '../components/welcome';

export const WelcomeScreen = props => {
  return (
    <View>
      <Welcome navigate={props.navigation.navigate} />
    </View>
  );
};

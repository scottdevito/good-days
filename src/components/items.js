import React from 'react';
import { View } from 'react-native';

export const Items = ({ _renderItems, data }) => {
    console.log(data);
  return (data) ? (<View>{_renderItems(data)}</View>) : ''
};

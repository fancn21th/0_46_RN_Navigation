import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeStack from './HomeStack'
import Product from '../Screens/Product'

export default createStackNavigator(
  {
    HomeStack: HomeStack,
    Product: Product,
  },
  {
    initialRouteName: 'HomeStack',
  }
);

import React from 'react'
import { TabNavigator } from 'react-navigation'
import HomeScreen from '../Screens/Home'
import MeScreen from '../Screens/Me'
import TabBarComponent from '../Components/Tab'

export default TabNavigator(
    {
        Home: HomeScreen,
        Me: MeScreen,
    },
    {
        tabBarPosition: 'bottom',
        tabBarComponent: TabBarComponent,
    },
);

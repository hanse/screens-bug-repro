import React, { Component } from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import { View } from 'react-native';

const DashboardNavigator = createStackNavigator(
  {
    Index: {
      getScreen: () => require('./Dashboard').default
    }
  },
  {
    initialRouteName: 'Index'
  }
);

const ProfileNavigator = createStackNavigator(
  {
    Index: {
      getScreen: () => require('./Profile').default
    }
  },
  {
    initialRouteName: 'Index'
  }
);

const TabsNavigator = createBottomTabNavigator(
  {
    Dashboard: {
      screen: DashboardNavigator
    },
    Profile: {
      screen: ProfileNavigator
    }
  },
  {
    initialRouteName: 'Dashboard'
  }
);

const AppNavigator = createStackNavigator(
  {
    Tabs: {
      screen: TabsNavigator
    },
    Modal: {
      screen: View
    }
  },
  {
    mode: 'modal',
    initialRouteName: 'Tabs',
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);

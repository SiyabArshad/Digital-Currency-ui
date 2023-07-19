import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from "../screens/HomeScreen"
import { colors } from '../utils/colors';
export default function BottomTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.greyver4,
        tabBarInactiveTintColor: colors.greyver1,
        headerShown: false,
        tabBarStyle: {
          paddingVertical:10,
          backgroundColor: colors.white,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          height:60
        }
      })}
      >
      <Tab.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome5Icon name="wallet" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"DiscoverScreen"}
        component={HomeScreen}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="compass" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name={"NotificationScreen"}
        component={HomeScreen}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen
        name={"SettingScreen"}
        component={HomeScreen}
        options={{
          tabBarShowLabel:false,
          tabBarIcon: ({color, size}) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
});

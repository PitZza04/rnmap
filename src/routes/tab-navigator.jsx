import { Button, StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import TabBarIcon from "../components/tab-bar-icon";
import TabBarLabel from "../components/tab-bar-label";
import ServicesScreen from "../screens/ServicesScreen";

import SettingScreen from "../screens/SettingScreen";

import ProfileNavigator from "./profile-navigator";

import { useNavigation } from "@react-navigation/native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          paddingBottom: 5,
        },
        tabBarLabel: function tabBarLabel({ focused, color }) {
          return (
            <TabBarLabel
              label={`${route.name.toUpperCase()}`}
              focused={focused}
              tintColor={color}
            />
          );
        },
        tabBarIcon: function tabBarIcon({ focused, color }) {
          return (
            <TabBarIcon
              routeName={route.name}
              focused={focused}
              tintColor={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Setting" component={SettingScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

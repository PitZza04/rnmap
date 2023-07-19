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

import ProfileNavigator from "./profile-navigator";

import SettingScreen from "../screens/profile/setting-screen";
import ServicesScreen from "../screens/services/services-screen";
import WalletScreen from "../screens/wallet/wallet-screen";
import NotificationScreen from "../screens/notification/notification-screen";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          paddingBottom: 5,
        },
        tabBarLabel: function tabBarLabel({ focused, color }) {
          return <TabBarLabel label={`${route.name}`} focused={focused} />;
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
      <Tab.Screen name="Services" component={ServicesScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
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

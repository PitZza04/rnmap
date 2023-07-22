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
import Ionicons from "react-native-vector-icons/Ionicons";
import ProfileNavigator from "./profile-navigator";

import SettingScreen from "../screens/profile/setting-screen";
import ServicesScreen from "../screens/services/services-screen";
import WalletScreen from "../screens/wallet/wallet-screen";
import NotificationScreen from "../screens/notification/notification-screen";
import BackButton from "../components/button/back-button";
import { useNavigation } from "@react-navigation/native";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          paddingVertical: 5,
          justifyContent: "center",

          alignItems: "center",
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
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="home-outline" size={25} color="#B61616" />
            ) : (
              <Ionicons name="home" size={25} color="#000" />
            );
          },
        }}
        component={ServicesScreen}
      />
      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons
                name="notifications-outline"
                size={25}
                color="#B61616"
              />
            ) : (
              <Ionicons name="notifications" size={25} color="#000" />
            );
          },
        }}
        component={NotificationScreen}
      />
      <Tab.Screen
        name="Wallet"
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <Ionicons name="wallet-outline" size={25} color="#B61616" />
            ) : (
              <Ionicons name="wallet" size={25} color="#000" />
            );
          },
        }}
        component={WalletScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          headerStyle: {
            backgroundColor: "#b61616",
          },
          tabBarStyle: {
            display: "none",
          },
          tabBarIcon: () => {
            return <Ionicons name="person-outline" size={25} color="#000" />;
          },

          headerShown: false,
        }}
        component={ProfileNavigator}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

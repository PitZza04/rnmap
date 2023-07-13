import { StyleSheet } from "react-native";
import React from "react";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import TabBarIcon from "../components/tab-bar-icon";
import TabBarLabel from "../components/tab-bar-label";
import ServicesScreen from "../screens/ServicesScreen";
import NotificationScreen from "../screens/NotificationScreen";
import SettingScreen from "../screens/SettingScreen";

const TabBar = (props) => {
  console.log("TabBarL: ", props);
  return (
    <BlurView
      blurAmount={100}
      blurType="light"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={TabBar}
      tabBarOptions={{
        tabStyle: {
          backgroundColor: "transparent",
        },
        style: {
          backgroundColor: "transparent",
        },
      }}
      screenOptions={({ route }) => ({
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
      <Tab.Screen name="Sleep" component={ServicesScreen} />
      <Tab.Screen name="Coaching" component={NotificationScreen} />
      <Tab.Screen name="Habits" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});

import React from "react";

import ProfileScreen from "../screens/profile/profile-screen";
import VehicleScreen from "../screens/profile/vehicle-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "../screens/profile/transaction-screen";
import CartScreen from "../screens/cart/cart-screen";
import BackButton from "../components/button/back-button";
import { useNavigation } from "@react-navigation/native";

import AboutUsScreen from "../screens/profile/about-us-screen";
import TermsScreen from "../screens/profile/term-screen";
import SettingScreen from "../screens/profile/setting-screen";
import { Header } from "../components/Header";
import { colors } from "../theme";
const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        // console.log("ROute", route);
        return {
          headerShown: true,
          header: ({ options }) => (
            <Header
              title={options.title}
              titleStyle={{
                color: colors.palette.white,
                fontWeight: "bold",
                fontFamily: "Robot-Bold",
              }}
              leftIcon="back"
              backgroundColor="#b61616"
              leftIconColor={colors.white}
              onLeftPress={() => {
                return route.name === "MainProfile"
                  ? navigation.goBack()
                  : navigation.popToTop();
              }}
            />
          ),
        };
      }}
    >
      <Stack.Screen
        name="MainProfile"
        component={ProfileScreen}
        options={{
          title: "My Profile",
        }}
      />
      <Stack.Screen
        options={{
          title: "Cart",
        }}
        name="Cart"
        component={CartScreen}
      />
      <Stack.Screen
        name="Vehicle"
        options={{
          title: "My Vehicles",
        }}
        component={VehicleScreen}
      />
      <Stack.Screen
        options={{
          title: "My Transactions",
        }}
        name="Transaction"
        component={TransactionScreen}
      />
      <Stack.Screen
        options={{
          title: "Settings",
        }}
        name="Settings"
        component={SettingScreen}
      />
      <Stack.Screen
        options={{
          title: "Terms of use",
        }}
        name="Terms"
        component={TermsScreen}
      />
      <Stack.Screen
        options={{
          title: "About us",
        }}
        name="About"
        component={AboutUsScreen}
      />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

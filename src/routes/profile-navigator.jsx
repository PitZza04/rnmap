import React from "react";

import ProfileScreen from "../screens/profile/profile-screen";
import VehicleScreen from "../screens/profile/vehicle-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "../screens/profile/transaction-screen";
import CartScreen from "../screens/cart/cart-screen";
import BackButton from "../components/button/back-button";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,

        headerStyle: { backgroundColor: "#b61616" },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#fff",
        },
        headerLeft: () => (
          <BackButton
            iconName={"arrowLineLeft"}
            handlePress={() => {
              return route.name === "MainProfile"
                ? navigation.goBack()
                : navigation.popToTop();
            }}
          />
        ),
      })}
    >
      <Stack.Screen
        name="MainProfile"
        component={ProfileScreen}
        options={{
          title: "My Profile",
        }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Vehicle" component={VehicleScreen} />
      <Stack.Screen name="Transaction" component={TransactionScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

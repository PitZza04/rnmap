import {
  TransitionPresets,
  // createStackNavigator,
} from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./tab-navigator";
import AuthNavigator from "./auth-navigator";
import { OnboardingScreen } from "../screens/onboarding";

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="App"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalTransition,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

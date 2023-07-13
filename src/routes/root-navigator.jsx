import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import TabNavigator from "./tab-navigator";
import AuthNavigator from "./auth-navigator";
import OnboardingScreen from "../screens/OnboardingScreen";

const RootNavigator = () => {
  const RootStack = createStackNavigator();
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Auth" component={AuthNavigator} />
      <RootStack.Screen
        name="App"
        component={TabNavigator}
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

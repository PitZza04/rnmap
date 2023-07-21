import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StyledButton } from "./src/components/ui/button";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/routes/root-navigator";
// import { enableFreeze } from "react-native-screens";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/themes";
import { enableScreens } from "react-native-screens";
enableScreens();
const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <RootNavigator />
            <StatusBar />
          </NavigationContainer>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});

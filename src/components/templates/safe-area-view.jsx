import {
  StyleSheet,
  StatusBar,
  SafeAreaView as RNSafeAreaView,
} from "react-native";
import React from "react";

const SafeAreaView = ({ children }) => {
  return <RNSafeAreaView style={styles.container}>{children}</RNSafeAreaView>;
};

export default SafeAreaView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

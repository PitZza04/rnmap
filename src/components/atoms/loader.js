import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/coins.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Genius is thinking...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000", // You can customize the border color here
    // For a white background, you can set the backgroundColor to '#FFF'
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 14,
    color: "#888", // You can customize the text color here
  },
});

import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ServicesScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>ServicesScreen</Text>
      <Button title="Hello" onPress={() => navigation.navigate("Onboarding")} />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

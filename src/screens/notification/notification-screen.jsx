import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const NotificationScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>NotificationScreen</Text>
      <Button title="hello" onPress={goBack} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});

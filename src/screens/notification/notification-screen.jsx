import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "../../components/organisms/button";

const NotificationScreen = ({ navigation }) => {
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>NotificationScreen</Text>

      <Button label="Button" variant="primary" />
      <Button label="Button" variant="outline" />
      <Button label="PRIMARY BUTTON DISABLED" disabled variant="primary" />
      <Button label="SECONDARY BUTTON DISABLED" disabled variant="secondary" />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});

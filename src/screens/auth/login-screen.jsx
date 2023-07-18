import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Layout from "../../components/templates/safe-area-view";

const LoginScreen = ({ navigation }) => {
  return (
    <Layout>
      <Text>LoginScreen</Text>
      <Button title="Skip" onPress={() => navigation.navigate("App")} />
    </Layout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});

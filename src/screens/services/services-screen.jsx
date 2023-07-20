import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "@shopify/restyle";
import { Center, Flex, Text } from "../../components/atoms";

const ServicesScreen = () => {
  const theme = useTheme();

  return (
    <Flex>
      <Center>
        <Text variant="body" color="primary">
          Hello
        </Text>
      </Center>
    </Flex>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({});

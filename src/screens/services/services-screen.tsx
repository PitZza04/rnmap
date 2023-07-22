import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useMemo } from "react";
import { useTheme } from "@shopify/restyle";
import { Center, Flex } from "../../components/atoms";

import { ScreenHeaderComponent } from "../../components/organisms/screen-header";
import { IconButton } from "../../components/atoms/icon-button";
import { useNavigation } from "@react-navigation/native";

const ServicesScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  const navigation = useNavigation();
  const settingsButton = useMemo(
    () => (
      <IconButton
        onPress={() => console.log("hello world")}
        backgroundColor="transparent"
        name="cog"
        color={"#b61616"}
        key="settings"
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <View style={$root}>
      <ScreenHeaderComponent
        title={"Hello World"}
        rightActions={[settingsButton]}
      />
    </View>
  );
};
const $root: ViewStyle = {
  flex: 1,
  backgroundColor: "#fff",
};
const $heading = {
  fontSize: 20,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 16,
  },
});
export default ServicesScreen;

import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useTheme } from "@shopify/restyle";
import { Center, Flex } from "../../components/atoms";

import Button from "../../components/atoms/button";
import Texts from "../../components/atoms/texts";
import PopupModal from "../../components/pop-up-modal";

const ServicesScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const openModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <View style={$root}>
      <TouchableOpacity onPress={openModal} style={styles.button}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <PopupModal visible={isVisible} onClose={closeModal}>
        <Text style={styles.modalText}>This is the modal content</Text>
      </PopupModal>
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

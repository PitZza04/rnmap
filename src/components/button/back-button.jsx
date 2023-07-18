import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconBold } from "../icon-regular";
import { TouchableOpacity } from "react-native-gesture-handler";

const BackButton = ({ iconName, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <IconBold name={iconName} height={20} width={20} fill={"#fff"} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  btnContainer: {},
});

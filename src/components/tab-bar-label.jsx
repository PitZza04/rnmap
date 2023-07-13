import React from "react";

import { StyleSheet, Text } from "react-native";

const TabBarLabel = ({ focused, label }) => {
  return (
    <Text style={[styles.label, { color: focused ? "#2c0b8e" : "#5e6267" }]}>
      {label.toUpperCase()}
    </Text>
  );
};

export default TabBarLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    textAlign: "center",
  },
});

// const Text = styled.Text<TextProps>`
//   font-size: 12px;
//   text-align: center;
//   color: ${({ focused, theme }) =>
//     focused ? theme.accent : theme.SECONDARY_TEXT_COLOR};
//   font-family: ${({ theme }) => theme.FONT_MEDIUM};
// `

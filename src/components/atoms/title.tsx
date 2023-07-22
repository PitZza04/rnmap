import React, { PropsWithChildren } from "react";
import { StyleSheet, Text as RNText } from "react-native";

import { FC } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <RNText allowFontScaling={false} style={styles.text}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#f7f7f7",
    fontSize: 32,
  },
});

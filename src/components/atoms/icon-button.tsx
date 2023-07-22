import React, { FC, useMemo } from "react";
import { StyleSheet, Pressable } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { colors } from "../../theme";

type IconButtonProps = {
  name?: string;
  size?: number;
  color?: string;
  backgroundColor?: string;
  onPress?: () => void;
};

const IconButton: FC<IconButtonProps> = ({
  name,
  size,
  color,
  backgroundColor,
  onPress,
}) => {
  return (
    <Pressable
      pointerEvents={onPress ? "auto" : "none"}
      onPress={onPress}
      style={[styles.container, backgroundColor ? { backgroundColor } : {}]}
    >
      <Icon
        name={name ?? "arm-flex"}
        size={size ?? 24}
        color={color ?? colors.black}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 4,

    justifyContent: "center",
    alignItems: "center",
  },
});

export { IconButton };

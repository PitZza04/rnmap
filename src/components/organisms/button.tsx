import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
  TextStyle,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";

type Variant = {
  container: ViewStyle;
  label: TextStyle;
  indicator: TextStyle;
};

type VariantName = "defaults" | "primary" | "outline" | "secondary";

type BVariant = {
  [key in VariantName]: Variant;
};

const buttonVariants: BVariant = {
  defaults: {
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 9999, // Using a large value for a circular button
      paddingHorizontal: 12,
      paddingVertical: 3,
      marginVertical: 2,
    },
    label: {
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
    },
    indicator: {
      color: "white",
      height: 30,
    },
  },
  primary: {
    container: {
      backgroundColor: "black",
    },
    label: {},
    indicator: {
      color: "white",
    },
  },
  secondary: {
    container: {
      backgroundColor: "#b61616", // You need to replace 'primary-600' with the actual color value
    },
    label: {
      color: "red", // You need to replace 'secondary-600' with the actual color value
    },
    indicator: {
      color: "white",
    },
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: "red", // You need to replace 'neutral-400' with the actual color value
    },
    label: {
      color: "black",
    },
    indicator: {
      color: "black",
    },
  },
};

interface Props extends TouchableOpacityProps {
  variant?: VariantName;
  label?: string;
  loading?: boolean;
}

export const Button = ({
  label,
  loading = false,
  variant = "primary",
  disabled = false,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled || loading}
      style={[
        buttonVariants.defaults.container,
        buttonVariants[variant].container,
        disabled ? { opacity: 0.5 } : {},
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          style={[
            buttonVariants.defaults.indicator,
            buttonVariants[variant].indicator,
          ]}
        />
      ) : (
        <Text
          style={[buttonVariants.defaults.label, buttonVariants[variant].label]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

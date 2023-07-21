import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ variant, size, label, onPress, disabled }) => {
  const getButtonStyle = () => {
    const variantStyles = {
      default: styles.default,
      destructive: styles.destructive,
      outline: styles.outline,
      secondary: styles.secondary,
      ghost: styles.ghost,
      link: styles.link,
      premium: styles.premium,
    };

    const sizeStyles = {
      default: styles.defaultSize,
      sm: styles.smSize,
      lg: styles.lgSize,
      icon: styles.iconSize,
    };

    return [
      styles.button,
      variantStyles[variant],
      sizeStyles[size],
      disabled && styles.disabled,
    ];
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  default: {
    backgroundColor: "#007BFF",
    color: "white",
  },
  destructive: {
    backgroundColor: "#FF3B30",
    color: "white",
  },
  outline: {
    borderWidth: 1,
    borderColor: "gray",

    color: "black",
  },
  secondary: {
    backgroundColor: "#E5E7EB",
    color: "black",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  link: {
    color: "#007BFF",
    textDecorationLine: "underline",
  },
  premium: {
    // Add your custom gradient styles here
  },
  defaultSize: {
    height: 40,
  },
  smSize: {
    height: 36,
  },
  lgSize: {
    height: 44,
  },
  iconSize: {
    height: 40,
    width: 40,
    padding: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;

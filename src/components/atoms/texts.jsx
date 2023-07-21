import { Text as RNText } from "react-native";
import React from "react";
import { colors, typography } from "../../theme";

const Texts = (props) => {
  const { weight, size, text, children, styl: $styleOverride, ...rest } = props;
  const content = text || children;
  const preset = $presets[props.preset] ? props.preset : "default";

  const $styles = [
    $presets[preset],
    $fontWeightStyles[weight],
    $sizeStyles[size],
    $styleOverride,
  ];

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  );
};

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 },
  xl: { fontSize: 24, lineHeight: 34 },
  lg: { fontSize: 20, lineHeight: 32 },
  md: { fontSize: 18, lineHeight: 26 },
  sm: { fontSize: 16, lineHeight: 24 },
  xs: { fontSize: 14, lineHeight: 21 },
  xxs: { fontSize: 12, lineHeight: 18 },
};

const $fontWeightStyles = Object.entries(typography.primary).reduce(
  (acc, [weight, fontFamily]) => {
    return { ...acc, [weight]: { fontFamily } };
  },
  {}
);

const $baseStyle = [
  $sizeStyles.sm,
  $fontWeightStyles.normal,
  { color: colors.text },
];

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold],

  heading: [
    $baseStyle,
    $sizeStyles.xxl,
    $fontWeightStyles.bold,
    { fontFamily: typography.fonts.roboto.normal },
  ],

  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.medium],

  formLabel: [$baseStyle, $fontWeightStyles.medium],

  formHelper: [$baseStyle, $sizeStyles.sm, $fontWeightStyles.normal],
};
export default Texts;

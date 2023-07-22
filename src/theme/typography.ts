// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native";

export const customFontsToLoad = {};

const fonts = {
  roboto: {
    thin: "Roboto-Thin",
    light: "Roboto-Light",
    normal: "Roboto-Regular",
    medium: "Roboto-Medium",
    bold: "Roboto-Bold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
};

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.roboto,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({
    ios: fonts.roboto,
    android: fonts.roboto,
  }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.roboto, android: fonts.roboto }),
};

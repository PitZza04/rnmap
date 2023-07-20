import { createTheme } from "@shopify/restyle";

const pallete = {
  primary: "#b61616",
  white: "white",
  black: "black",
  red: "red",
  blue: "blue",
  yellow: "yellow",
  paper00: "#ffffff",
  paper10: "#f5f5f4",
  paper20: "#e6e6e6",
  paper100: "#aeaeae",
  paper300: "#767577",
  paper900: "#202020",
  blue70: "#2185d0",
  navy20: "#171a21",
  navy900: "#b9babc",
};

const theme = createTheme({
  colors: {
    primary: pallete.primary,
    white: pallete.white,
    black: pallete.black,
    red: pallete.red,
    blue: pallete.blue,
    yellow: pallete.yellow,

    $primary: pallete.blue70,
    $windowBackground: "#f0f0f0",
    $background: pallete.paper10,
    $foreground: pallete.paper900,
    $navbarBackground: pallete.paper10,
    $navbarBorderBottom: pallete.paper100,
    $sidebarBackground: pallete.navy20,
    $sidebarForeground: pallete.navy900,
    $sidebarSeparator: pallete.paper00 + "20",
    $headerBarBackground: pallete.paper20,
    $fieldInputBackground: pallete.paper00,
    $fieldInputPlaceholderTextColor: pallete.paper300,
  },
  spacing: {
    0: 0,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 48,
    hg: 128,
  },
  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {
      // We can define a default text variant here.
    },
  },
  borderRadii: {
    xs: 4,
    sm: 16,
    md: 24,
    lg: 64,
    hg: 128,
  },
  statusBar: {
    barStyle: "dark-content",
  },

  barVariants: {
    headerBar: {
      bg: "$headerBarBackground",
      borderRadius: "hg",
    },
  },
});

export default theme;

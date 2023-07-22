import {
  Image,
  StyleSheet,
  TextStyle,
  StyleProp,
  ImageStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { images, colors } from "../../theme";

import { useNavigation } from "@react-navigation/native";

import { Text } from "../../components/Text";
import { Header } from "../../components/Header";

const WalletScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Header
          title="Auto - Wallet"
          titleStyle={{
            color: colors.palette.white,
            fontWeight: "bold",
            fontFamily: "Robot-Bold",
          }}
          leftIcon="back"
          backgroundColor="#b61616"
          leftIconColor={colors.white}
          onLeftPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View style={$root}>
      <Text
        text={"Coming Soon"}
        preset="subheading"
        style={{ color: colors.black }}
      />
      <Image style={{ height: 100, width: 200 }} source={images.unavailable} />
      <Text text={"Still working on it!"} style={{ color: colors.black }} />
    </View>
  );
};

const $root: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  backgroundColor: colors.background,
};
const $heading: TextStyle = {
  fontSize: 16,
  fontWeight: "bold",

  fontFamily: "Roboto-Bold",
};
const $image: StyleProp<ImageStyle> = {
  height: "100%",
  width: "100%",
};
export default WalletScreen;
const styles = StyleSheet.create({});

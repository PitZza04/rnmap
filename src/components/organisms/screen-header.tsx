import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

import { SpacingComponent } from "../atoms/spacing";
import { BackButton } from "../molecules/back-button";
import { Title } from "../atoms/title";
import { useNavigation } from "@react-navigation/native";

type ScreenHeaderProps = {
  hideBackButton?: boolean;
  title?: string;
  rightActions?: JSX.Element[];
};

const ScreenHeaderComponent: FC<ScreenHeaderProps> = (props) => {
  const navigation = useNavigation();
  const showBackButton = !props.hideBackButton && navigation.canGoBack();

  return (
    <View style={[styles.header]}>
      {showBackButton && <BackButton />}
      <SpacingComponent
        sides={props.hideBackButton ? ["right"] : ["left"]}
        style={[styles.flex]}
      >
        <Title>{props.title}</Title>
      </SpacingComponent>
      {props.rightActions && props.rightActions.map((component) => component)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#b61616",
  },
  flex: {
    flex: 1,
  },
});

export { ScreenHeaderComponent };

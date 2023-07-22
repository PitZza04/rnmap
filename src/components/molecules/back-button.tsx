import React, { FC } from "react";

import { IconButton } from "../atoms/icon-button";
// import { useAppNavigation } from "@/navigators/app-navigator";
import { colors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const BackButton: FC = () => {
  const navigation = useNavigation();

  return (
    <IconButton
      onPress={navigation.goBack}
      name="arrow-left"
      backgroundColor="transparent"
      color={colors.white}
    />
  );
};

export { BackButton };

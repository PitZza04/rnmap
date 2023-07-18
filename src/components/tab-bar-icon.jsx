import React from "react";
import { View } from "react-native";

import { IconBold } from "./icon-regular";

const tabBarIcons = {
  Sleep: "clockBold",
  Coaching: "schoolPhysicalBold",
  Habits: "checklist",
  Profile: "userBold",
  Settings: "settingsBold",
};

const TabBarIcon = ({ focused, routeName }) => {
  return (
    <View>
      <IconBold
        name={tabBarIcons[routeName]}
        height={20}
        focused={focused}
        width={20}
        fill={focused ? "#2c0b8e" : "#5e6267"}
      />
    </View>
  );
};

export default TabBarIcon;

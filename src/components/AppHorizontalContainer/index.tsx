import React, { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { IAppHorizontalContainer } from "./types";

export const AppHorizontalContainer: FC<IAppHorizontalContainer> = (
  {
    children,
    style
  }
) => {
  return (
    <View style={[
      styles.horizontal,
      style
    ]}>{children}</View>
  );
};

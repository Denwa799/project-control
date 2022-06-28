import React, { FC } from "react";
import { IAppButton } from "./types";
import { THEME } from "../../theme";
import { TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";

export const AppButton: FC<IAppButton> = (
  {
    onPress,
    title,
    colors = [THEME.MAIN_COLOR, THEME.THIRD_COLOR]
  }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={[{ backgroundColor: colors[0] }, styles.button]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

import React, { FC } from "react";
import { TouchableHighlight, Text, View } from "react-native";
import { styles } from "./styles";
import { IAppRadioBtn } from "./types";

export const AppRadioBtn: FC<IAppRadioBtn> = ({ text, isActive, onPress, style }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="none" style={style}>
      <View style={styles.container}>
        <View style={[
          styles.circle,
          isActive && styles.active
        ]}/>
        <Text style={[
          styles.text,
          isActive && styles.activeText
        ]}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

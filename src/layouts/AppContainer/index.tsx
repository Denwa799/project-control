import React, { FC } from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const AppContainer: FC = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

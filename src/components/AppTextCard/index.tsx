import React, { FC } from "react";
import { Text, View } from "react-native";
import { AppContainer } from "../../layouts/AppContainer";
import { styles } from "./styles";
import { IAppTextCard } from "./types";

export const AppTextCard: FC<IAppTextCard> = ({ text, status, responsible }) => {
  return (
    <AppContainer>
      <View
        style={[
          styles.card,
          status === "notCompleted" && styles.red,
          status === "inProgress" && styles.yellow,
          status === "done" && styles.green,
        ]}
      >
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.responsible}>{responsible}</Text>
      </View>
    </AppContainer>
  );
};

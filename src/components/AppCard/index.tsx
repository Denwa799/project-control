import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppContainer } from "../../layouts/AppContainer";
import { styles } from "./styles";
import { IAppCard } from "./types";

export const AppCard: FC<IAppCard> = ({ item, onOpen }) => {
  return (
    <AppContainer>
      <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(item)}>
        <View style={styles.card}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </AppContainer>
  );
};

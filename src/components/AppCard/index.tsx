import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppContainer } from "../../layouts/AppContainer";
import { styles } from "./styles";
import { IAppCard } from "./types";
import { BOX_SHADOW } from "../../theme";

export const AppCard: FC<IAppCard> = ({ item, onOpen }) => {
  return (
    <AppContainer>
      <TouchableOpacity activeOpacity={0.9} onPress={() => onOpen(item)}>
        <View style={[styles.card, BOX_SHADOW]}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </AppContainer>
  );
};

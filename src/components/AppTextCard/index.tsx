import React, { FC, useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { AppContainer } from "../../layouts/AppContainer";
import { styles } from "./styles";
import { IAppTextCard } from "./types";
import { MaterialIcons } from '@expo/vector-icons';

export const AppTextCard: FC<IAppTextCard> = ({ _id, text, status, responsible, onDelete }) => {
  const deleteHandler = useCallback(() => {
    console.log('Удалить');
  }, [])

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
        <View style={styles.textContainer}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.responsible}>{responsible}</Text>
        </View>
        <TouchableHighlight onPress={onDelete ? () => onDelete(_id) : deleteHandler} underlayColor='none'>
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableHighlight>
      </View>
    </AppContainer>
  );
};

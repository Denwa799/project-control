import React, { FC, useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { AppContainer } from "../../layouts/AppContainer";
import { styles } from "./styles";
import { IAppTextCard } from "./types";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { THEME } from "../../theme";

export const AppTextCard: FC<IAppTextCard> = (
  {
    _id,
    text,
    status,
    responsible,
    onDelete,
    onChange,
  }) => {
  const deleteHandler = useCallback(() => {
    console.log("Удалить");
  }, []);

  const changeHandler = useCallback(() => {
    console.log("Редактировать");
  }, []);

  return (
    <AppContainer>
      <View
        style={[
          styles.card,
          status === "notCompleted" && styles.red,
          status === "inProgress" && styles.yellow,
          status === "done" && styles.green
        ]}
      >
        <View style={styles.textContainer}>
          <Text style={[
            styles.text,
            status === "inProgress" && styles.blackText,
          ]}>{text}</Text>
          <Text style={[
            styles.responsible,
            status === "inProgress" && styles.blackText,
          ]}>{responsible}</Text>
        </View>
        <TouchableHighlight onPress={onChange ? () => onChange(_id, text, responsible, status) : changeHandler} underlayColor='none'>
          <MaterialCommunityIcons name="note-edit" size={24} color={status !== 'inProgress' ? THEME.WHITE_COLOR_90 : THEME.BLACK_COLOR}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onDelete ? () => onDelete(_id) : deleteHandler} underlayColor='none'>
          <MaterialIcons name="delete" size={24} color={status !== 'inProgress' ? THEME.WHITE_COLOR_90 : THEME.BLACK_COLOR}/>
        </TouchableHighlight>
      </View>
    </AppContainer>
  );
};

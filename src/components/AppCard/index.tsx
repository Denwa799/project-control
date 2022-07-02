import React, { FC, useCallback } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { AppContainer } from "../../layouts/AppContainer";
import { styles } from "./styles";
import { IAppCard } from "./types";
import { BOX_SHADOW, THEME } from "../../theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const AppCard: FC<IAppCard> = (
  {
    _id,
    name,
    item,
    onOpen,
    onDelete,
    onChange
  }) => {
  const deleteHandler = useCallback(() => {
    console.log("Удалить");
  }, []);

  const changeHandler = useCallback(() => {
    console.log("Редактировать");
  }, []);

  return (
    <AppContainer>
      <View style={[styles.card, BOX_SHADOW]}>
        <TouchableOpacity style={styles.cardHandler} activeOpacity={0.9} onPress={() => onOpen(item)}>
          <Text style={styles.text}>{item.name}</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={onChange ? () => onChange(_id, name) : changeHandler}
                            underlayColor='none'>
          <MaterialCommunityIcons name="note-edit" size={26}
                                  color={THEME.SECOND_COLOR}/>
        </TouchableHighlight>
        <TouchableHighlight onPress={onDelete ? () => onDelete(_id) : deleteHandler} underlayColor='none'>
          <MaterialIcons name="delete" size={26} color={THEME.SECOND_COLOR}/>
        </TouchableHighlight>
      </View>
    </AppContainer>
  );
};

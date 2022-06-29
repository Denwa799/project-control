import React, { FC, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IProjectScreen } from "./types";
import { AppTextList } from "../../../../components/AppTextList";

export const ProjectScreen: FC<IProjectScreen> = ({route: {params}}) => {
  const navigation = useNavigation();
  const { tasks } = params;

  useEffect(() => {
    navigation.setOptions({
      title: 'Задачи'
    })
  }, []);

  return (
    <View>
      <AppTextList data={tasks}/>
    </View>
  );
};

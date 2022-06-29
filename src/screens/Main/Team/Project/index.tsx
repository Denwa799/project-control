import React, { FC, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IProjectScreen } from "./types";
import { AppTextList } from "../../../../components/AppTextList";
import { AppButton } from "../../../../components/AppButton";
import { AppContainer } from "../../../../layouts/AppContainer";

export const ProjectScreen: FC<IProjectScreen> = ({route: {params}}) => {
  const navigation = useNavigation();
  const { teamId, projectId, tasks } = params;

  useEffect(() => {
    navigation.setOptions({
      title: 'Задачи'
    })
  }, []);

  const addTask = () => {

  }

  return (
    <View>
      <AppTextList data={tasks}/>
      <AppContainer>
        <AppButton onPress={addTask} title="Добавить задачу"/>
      </AppContainer>
    </View>
  );
};

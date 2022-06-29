import React, { FC, useCallback, useEffect } from "react";
import { Alert, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IProjectScreen } from "./types";
import { AppTextList } from "../../../../components/AppTextList";
import { AppButton } from "../../../../components/AppButton";
import { AppContainer } from "../../../../layouts/AppContainer";
import { useTasks } from "../../../../hooks/useTasks";
import { styles } from "./styles";
import { AppLoader } from "../../../../components/AppLoader";
import { create, deleteDocument } from "../../../../firebase";

export const ProjectScreen: FC<IProjectScreen> = ({route: {params}}) => {
  const navigation = useNavigation();
  const { teamId, projectId } = params;
  const { tasks, isLoading } = useTasks(teamId, projectId);
  const collectionPath = `teams/${teamId}/projects/${projectId}/tasks`;

  useEffect(() => {
    navigation.setOptions({
      title: 'Задачи'
    })
  }, []);

  const addTask = useCallback(() => {
    const data = {
      text: 'Договориться об местефывывфывфвфывфывфывфыфвывфывфыфвыфывфывфывфывфывывфывфывфывфывфыв',
      status: 'inProgress',
      responsible: 'Вася'
    }
    create(collectionPath, data);
  }, [])

  const onDelete = useCallback((_id: string) => {
    deleteDocument(collectionPath, _id);
  }, [])

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    :  (
    <View>
      <AppTextList data={tasks} style={styles.list} onDelete={onDelete}/>
        <AppContainer style={styles.container}>
          <AppButton onPress={addTask} title="Добавить задачу"/>
        </AppContainer>
    </View>
  );
};

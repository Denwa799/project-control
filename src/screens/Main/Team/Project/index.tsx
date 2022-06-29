import React, { FC, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IProjectScreen } from "./types";
import { AppTextList } from "../../../../components/AppTextList";
import { AppButton } from "../../../../components/AppButton";
import { AppContainer } from "../../../../layouts/AppContainer";
import { useTasks } from "../../../../hooks/useTasks";
import { styles } from "./styles";
import { AppLoader } from "../../../../components/AppLoader";
import { Modals } from "./Modals";

export const ProjectScreen: FC<IProjectScreen> = ({ route: { params } }) => {
  const navigation = useNavigation();
  const [taskId, setTaskId] = useState("");

  const { teamId, projectId } = params;
  const { tasks, isLoading } = useTasks(teamId, projectId);

  const [modalVisible, setModalVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: "Задачи"
    });
  }, []);

  const showCreateModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const deleteIconHandler = useCallback((_id: string) => {
    setTaskId(_id);
    setDialogVisible(true);
  }, [taskId]);

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    : (
      <View>
        <AppTextList data={tasks} style={styles.list} onDelete={deleteIconHandler}/>
        <AppContainer style={styles.container}>
          <AppButton onPress={showCreateModal} title="Добавить задачу"/>
        </AppContainer>
        <Modals
          teamId={teamId}
          projectId={projectId}
          dialogVisible={dialogVisible}
          setDialogVisible={setDialogVisible}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          taskId={taskId}
        />
      </View>
    )
    ;
};

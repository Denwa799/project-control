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
  const [text, setText] = useState("");
  const [responsible, setResponsible] = useState("");

  const { teamId, projectId } = params;
  const { tasks, isLoading } = useTasks(teamId, projectId);

  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const [modalChangeVisible, setModalChangeVisible] = useState(false);
  const [dialogDeleteVisible, setDialogDeleteVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: "Задачи"
    });
  }, []);

  const showCreateModal = useCallback(() => {
    setModalCreateVisible(true);
  }, []);

  const deleteIconHandler = useCallback((_id: string) => {
    setTaskId(_id);
    setDialogDeleteVisible(true);
  }, [taskId]);

  const changeIconHandler = useCallback((_id: string, text: string, responsible: string) => {
    setTaskId(_id);
    setText(text);
    setResponsible(responsible);
    setModalChangeVisible(true);
  }, [taskId, text, responsible]);

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    : (
      <View>
        <AppTextList
          data={tasks}
          style={styles.list}
          onDelete={deleteIconHandler}
          onChange={changeIconHandler}
        />
        <AppContainer style={styles.container}>
          <AppButton onPress={showCreateModal} title="Добавить задачу"/>
        </AppContainer>
        <Modals
          teamId={teamId}
          projectId={projectId}
          dialogDeleteVisible={dialogDeleteVisible}
          setDialogDeleteVisible={setDialogDeleteVisible}
          modalCreateVisible={modalCreateVisible}
          setModalCreateVisible={setModalCreateVisible}
          taskId={taskId}
          modalChangeVisible={modalChangeVisible}
          setModalChangeVisible={setModalChangeVisible}
          text={text}
          responsible={responsible}
        />
      </View>
    );
};

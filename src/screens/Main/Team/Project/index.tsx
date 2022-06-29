import React, { FC, useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IProjectScreen } from "./types";
import { AppTextList } from "../../../../components/AppTextList";
import { AppButton } from "../../../../components/AppButton";
import { AppContainer } from "../../../../layouts/AppContainer";
import { useTasks } from "../../../../hooks/useTasks";
import { styles } from "./styles";
import { AppLoader } from "../../../../components/AppLoader";
import { create, deleteDocument } from "../../../../firebase";
import { Button, Dialog, Modal } from "react-native-paper";
import { THEME } from "../../../../theme";
import { AppField } from "../../../../components/AppField";

export const ProjectScreen: FC<IProjectScreen> = ({ route: { params } }) => {
  const navigation = useNavigation();
  const [taskId, setTaskId] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [createTextFieldValue, setCreateTextFieldValue] = useState('');
  const [createResponsibleFieldValue, setCreateResponsibleFieldValue] = useState('');

  const [isCreateTextFieldError, setIsCreateTextFieldError] = useState(false);
  const [isCreateResponsibleFieldError, setIsCreateResponsibleFieldError] = useState(false);

  const { teamId, projectId } = params;
  const { tasks, isLoading } = useTasks(teamId, projectId);
  const collectionPath = `teams/${teamId}/projects/${projectId}/tasks`;

  useEffect(() => {
    navigation.setOptions({
      title: "Задачи"
    });
  }, []);

  const addTask = useCallback(() => {
    if (!createTextFieldValue) return setIsCreateTextFieldError(true);
    if (!createResponsibleFieldValue) return setIsCreateResponsibleFieldError(true);

    const data = {
      text: createTextFieldValue,
      status: "notCompleted",
      responsible: createResponsibleFieldValue
    };
    create(collectionPath, data);
    hideModal();
  }, [createTextFieldValue, createResponsibleFieldValue]);

  const showCreateModal = useCallback(() => {
    setModalVisible(true);
  }, [])

  const clearFields = useCallback(() => {
    setCreateTextFieldValue('');
    setCreateResponsibleFieldValue('');
    setIsCreateTextFieldError(false);
    setIsCreateResponsibleFieldError(false);
  }, []);

  const deleteIconHandler = useCallback((_id: string) => {
    setTaskId(_id);
    setDialogVisible(true);
  }, [taskId]);

  const onDelete = useCallback(() => {
    deleteDocument(collectionPath, taskId);
    setDialogVisible(false);
  }, [taskId]);

  const hideDialog  = useCallback(() => {
    setDialogVisible(false)
  }, [dialogVisible]);

  const hideModal = useCallback(() => {
    setModalVisible(false);
    clearFields();
  }, [dialogVisible]);

  const createTextFieldHandler = useCallback((value: string) => {
    setCreateTextFieldValue(value);
    setIsCreateTextFieldError(false);
  }, [createTextFieldValue]);

  const createResponsibleFieldHandler = useCallback((value: string) => {
    setCreateResponsibleFieldValue(value);
    setIsCreateResponsibleFieldError(false);
  }, [createResponsibleFieldValue]);

  return isLoading
    ? <View style={styles.loader}><AppLoader/></View>
    : (
      <View>
        <AppTextList data={tasks} style={styles.list} onDelete={deleteIconHandler}/>
        <AppContainer style={styles.container}>
          <AppButton onPress={showCreateModal} title="Добавить задачу"/>
        </AppContainer>
        <Dialog visible={dialogVisible} onDismiss={hideDialog}>
          <Dialog.Title>
            Удалить задачу?
          </Dialog.Title>
          <Dialog.Actions>
            <Button color={THEME.MAIN_COLOR} onPress={hideDialog}>Нет</Button>
            <Button color={THEME.MAIN_COLOR} onPress={onDelete}>Да</Button>
          </Dialog.Actions>
        </Dialog>
        <Modal
          visible={modalVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContainer}
          style={styles.modalWrapper}
        >
          <AppField
            value={createTextFieldValue}
            placeholder={"Введите текст"}
            onChange={createTextFieldHandler}
            isDanger={isCreateTextFieldError}
            dangerText="Пустое поле"
          />
          <AppField
            value={createResponsibleFieldValue}
            placeholder={"Введите имя ответственного"}
            onChange={createResponsibleFieldHandler}
            isDanger={isCreateResponsibleFieldError}
            dangerText="Пустое поле"
          />
          <View style={styles.modalBtns}>
            <Button color={THEME.MAIN_COLOR} onPress={hideModal}>Выйти</Button>
            <Button color={THEME.MAIN_COLOR} onPress={addTask}>Создать</Button>
          </View>
        </Modal>
      </View>
    );
};

import React, { FC, useCallback, useState } from "react";
import { View } from "react-native";
import { Dialog } from "react-native-paper";
import { AppTextButton } from "../../../../components/AppTextButton";
import { AppField } from "../../../../components/AppField";
import { styles } from "./styles";
import { AppModal } from "../../../../components/AppModal";
import { create, deleteDocument } from "../../../../firebase";
import { IModals } from "./types";

export const Modals: FC<IModals> = (
  {
    teamId,
    projectId,
    dialogVisible,
    setDialogVisible,
    modalVisible,
    setModalVisible,
    taskId
  }) => {
  const [createTextFieldValue, setCreateTextFieldValue] = useState("");
  const [createResponsibleFieldValue, setCreateResponsibleFieldValue] = useState("");

  const [isCreateTextFieldError, setIsCreateTextFieldError] = useState(false);
  const [isCreateResponsibleFieldError, setIsCreateResponsibleFieldError] = useState(false);

  const collectionPath = `teams/${teamId}/projects/${projectId}/tasks`;

  const hideDialog = useCallback(() => {
    setDialogVisible(false);
  }, [dialogVisible]);

  const clearFields = useCallback(() => {
    setCreateTextFieldValue("");
    setCreateResponsibleFieldValue("");
    setIsCreateTextFieldError(false);
    setIsCreateResponsibleFieldError(false);
  }, []);

  const createTextFieldHandler = useCallback((value: string) => {
    setCreateTextFieldValue(value);
    setIsCreateTextFieldError(false);
  }, [createTextFieldValue]);

  const createResponsibleFieldHandler = useCallback((value: string) => {
    setCreateResponsibleFieldValue(value);
    setIsCreateResponsibleFieldError(false);
  }, [createResponsibleFieldValue]);

  const hideModal = useCallback(() => {
    setModalVisible(false);
    clearFields();
  }, [dialogVisible]);

  const onDelete = useCallback(() => {
    deleteDocument(collectionPath, taskId);
    setDialogVisible(false);
  }, [taskId]);

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

  return (
    <>
      <Dialog visible={dialogVisible} onDismiss={hideDialog}>
        <Dialog.Title>
          Удалить задачу?
        </Dialog.Title>
        <Dialog.Actions>
          <AppTextButton onPress={hideDialog}>Нет</AppTextButton>
          <AppTextButton onPress={onDelete}>Да</AppTextButton>
        </Dialog.Actions>
      </Dialog>
      <AppModal
        visible={modalVisible}
        onDismiss={hideModal}
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
          <AppTextButton onPress={hideModal}>Закрыть</AppTextButton>
          <AppTextButton onPress={addTask}>Создать</AppTextButton>
        </View>
      </AppModal>
    </>
  );
};

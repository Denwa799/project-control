import React, { FC, useCallback, useEffect, useState } from "react";
import { View } from "react-native";
import { Dialog } from "react-native-paper";
import { AppTextButton } from "../../../../components/AppTextButton";
import { AppField } from "../../../../components/AppField";
import { styles } from "./styles";
import { AppModal } from "../../../../components/AppModal";
import { create, deleteDocument, updateDocument } from "../../../../firebase";
import { IModals } from "./types";

export const Modals: FC<IModals> = (
  {
    teamId,
    projectId,
    dialogDeleteVisible,
    setDialogDeleteVisible,
    modalCreateVisible,
    setModalCreateVisible,
    taskId,
    modalChangeVisible,
    setModalChangeVisible,
    text,
    responsible
  }) => {
  const [createTextFieldValue, setCreateTextFieldValue] = useState("");
  const [createResponsibleFieldValue, setCreateResponsibleFieldValue] = useState("");
  const [changeTextFieldValue, setChangeTextFieldValue] = useState(text);
  const [changeResponsibleFieldValue, setChangeResponsibleFieldValue] = useState("");

  const [isCreateTextFieldError, setIsCreateTextFieldError] = useState(false);
  const [isCreateResponsibleFieldError, setIsCreateResponsibleFieldError] = useState(false);
  const [isChangeTextFieldError, setIsChangeTextFieldError] = useState(false);
  const [isChangeResponsibleFieldError, setIsChangeResponsibleFieldError] = useState(false);

  const collectionPath = `teams/${teamId}/projects/${projectId}/tasks`;

  useEffect(() => {
    setChangeTextFieldValue(text);
    setChangeResponsibleFieldValue(responsible);
  }, [modalChangeVisible]);

  const hideDialog = useCallback(() => {
    setDialogDeleteVisible(false);
  }, [dialogDeleteVisible]);

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

  const changeTextFieldHandler = useCallback((value: string) => {
    setChangeTextFieldValue(value);
    setIsChangeTextFieldError(false);
  }, [changeTextFieldValue]);

  const changeResponsibleFieldHandler = useCallback((value: string) => {
    setChangeResponsibleFieldValue(value);
    setIsChangeResponsibleFieldError(false);
  }, [changeResponsibleFieldValue]);

  const hideCreateModal = useCallback(() => {
    setModalCreateVisible(false);
    clearFields();
  }, [modalCreateVisible]);

  const hideChangeModal = useCallback(() => {
    setModalChangeVisible(false);
  }, [modalChangeVisible]);

  const onDelete = useCallback(() => {
    deleteDocument(collectionPath, taskId);
    setDialogDeleteVisible(false);
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
    hideCreateModal();
  }, [createTextFieldValue, createResponsibleFieldValue]);

  const editTask = useCallback(() => {
    if (!changeTextFieldValue) return setIsChangeTextFieldError(true);
    if (!changeResponsibleFieldValue) return setIsChangeResponsibleFieldError(true);

    const data = {
      text: changeTextFieldValue,
      responsible: changeResponsibleFieldValue
    };

    updateDocument(collectionPath, taskId, data);
    hideChangeModal();
  }, [changeTextFieldValue, changeResponsibleFieldValue]);

  return (
    <>
      <Dialog visible={dialogDeleteVisible} onDismiss={hideDialog}>
        <Dialog.Title>
          Удалить задачу?
        </Dialog.Title>
        <Dialog.Actions>
          <AppTextButton onPress={hideDialog}>Нет</AppTextButton>
          <AppTextButton onPress={onDelete}>Да</AppTextButton>
        </Dialog.Actions>
      </Dialog>
      <AppModal
        visible={modalCreateVisible}
        onDismiss={hideCreateModal}
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
          <AppTextButton onPress={hideCreateModal}>Закрыть</AppTextButton>
          <AppTextButton onPress={addTask}>Создать</AppTextButton>
        </View>
      </AppModal>
      <AppModal
        visible={modalChangeVisible}
        onDismiss={hideChangeModal}
      >
        <AppField
          value={changeTextFieldValue}
          placeholder={"Введите текст"}
          onChange={changeTextFieldHandler}
          isDanger={isChangeTextFieldError}
          dangerText="Пустое поле"
        />
        <AppField
          value={changeResponsibleFieldValue}
          placeholder={"Введите имя ответственного"}
          onChange={changeResponsibleFieldHandler}
          isDanger={isChangeResponsibleFieldError}
          dangerText="Пустое поле"
        />
        <View style={styles.modalBtns}>
          <AppTextButton onPress={hideChangeModal}>Закрыть</AppTextButton>
          <AppTextButton onPress={editTask}>Сохранить</AppTextButton>
        </View>
      </AppModal>
    </>
  );
};

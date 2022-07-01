import React, { FC, useCallback, useState } from "react";
import { AppField } from "../../../../components/AppField";
import { View } from "react-native";
import { styles } from "./styles";
import { AppTextButton } from "../../../../components/AppTextButton";
import { AppModal } from "../../../../components/AppModal";
import { serverTimestamp } from "firebase/firestore";
import { create } from "../../../../firebase";
import { IModalCreate } from "./types";

export const ModalCreate: FC<IModalCreate> = ({modalCreateVisible, setModalCreateVisible, collectionPath}) => {
  const [createTextFieldValue, setCreateTextFieldValue] = useState("");
  const [createResponsibleFieldValue, setCreateResponsibleFieldValue] = useState("");

  const [isCreateTextFieldError, setIsCreateTextFieldError] = useState(false);
  const [isCreateResponsibleFieldError, setIsCreateResponsibleFieldError] = useState(false);

  const clearFields = useCallback(() => {
    setCreateTextFieldValue("");
    setCreateResponsibleFieldValue("");
    setIsCreateTextFieldError(false);
    setIsCreateResponsibleFieldError(false);
  }, []);

  const hideCreateModal = useCallback(() => {
    setModalCreateVisible(false);
    clearFields();
  }, [modalCreateVisible]);

  const createTextFieldHandler = useCallback((value: string) => {
    setCreateTextFieldValue(value);
    setIsCreateTextFieldError(false);
  }, [createTextFieldValue]);

  const createResponsibleFieldHandler = useCallback((value: string) => {
    setCreateResponsibleFieldValue(value);
    setIsCreateResponsibleFieldError(false);
  }, [createResponsibleFieldValue]);

  const addTask = useCallback(() => {
    if (!createTextFieldValue) return setIsCreateTextFieldError(true);
    if (!createResponsibleFieldValue) return setIsCreateResponsibleFieldError(true);

    const data = {
      text: createTextFieldValue,
      status: "notCompleted",
      responsible: createResponsibleFieldValue,
      created: serverTimestamp()
    };
    create(collectionPath, data);
    hideCreateModal();
  }, [createTextFieldValue, createResponsibleFieldValue]);

  return (
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
  );
};

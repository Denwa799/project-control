import React, { FC, useCallback, useState } from "react";
import { AppField } from "../../../components/AppField";
import { View } from "react-native";
import { AppTextButton } from "../../../components/AppTextButton";
import { AppModal } from "../../../components/AppModal";
import { serverTimestamp } from "firebase/firestore";
import { create } from "../../../firebase";
import { styles } from "./styles";
import { IModalCreate } from "./types";

export const ModalCreate: FC<IModalCreate> = (
  {
    modalCreateVisible,
    setModalCreateVisible,
    collectionPath
  }) => {
  const [nameValue, setNameValue] = useState("");
  const [isNameError, setIsNameError] = useState(false);

  const clearFields = useCallback(() => {
    setNameValue("");
    setIsNameError(false);
  }, []);

  const hideCreateModal = useCallback(() => {
    setModalCreateVisible(false);
    clearFields();
  }, [modalCreateVisible]);

  const nameHandler = useCallback((value: string) => {
    setNameValue(value);
    setIsNameError(false);
  }, [nameValue]);

  const addProject = useCallback(() => {
    if (!nameValue) return setIsNameError(true);

    const data = {
      name: nameValue,
      created: serverTimestamp()
    };
    create(collectionPath, data);
    hideCreateModal();
  }, [nameValue]);

  return (
    <AppModal
      visible={modalCreateVisible}
      onDismiss={hideCreateModal}
    >
      <AppField
        value={nameValue}
        placeholder={"Введите название"}
        onChange={nameHandler}
        isDanger={isNameError}
        dangerText="Пустое поле"
      />
      <View style={styles.modalBtns}>
        <AppTextButton onPress={hideCreateModal}>Закрыть</AppTextButton>
        <AppTextButton onPress={addProject}>Создать</AppTextButton>
      </View>
    </AppModal>
  );
};

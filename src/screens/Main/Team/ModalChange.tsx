import React, { FC, useCallback, useEffect, useState } from "react";
import { AppField } from "../../../components/AppField";
import { View } from "react-native";
import { AppTextButton } from "../../../components/AppTextButton";
import { AppModal } from "../../../components/AppModal";
import { IModalChange } from "./types";
import { styles } from "./styles";
import { updateDocument } from "../../../firebase";

export const ModalChange: FC<IModalChange> = (
  {
    modalChangeVisible,
    setModalChangeVisible,
    name,
    collectionPath,
    projectId
  }
  ) => {
  const [nameValue, setNameValue] = useState('');
  const [isNameError, setIsNameError] = useState(false);

  useEffect(() => {
    setNameValue(name);
  }, [modalChangeVisible]);

  const hideModal = useCallback(() => {
    setModalChangeVisible(false);
  }, [modalChangeVisible]);

  const nameHandler = useCallback((value: string) => {
    setNameValue(value);
    setIsNameError(false);
  }, [nameValue]);

  const editProject = useCallback(() => {
    if (!nameValue) return setIsNameError(true);

    const data = {
      name: nameValue,
    };

    updateDocument(collectionPath, projectId, data);
    hideModal();
  }, [nameValue]);

  return (
    <AppModal
      visible={modalChangeVisible}
      onDismiss={hideModal}
    >
      <AppField
        value={nameValue}
        placeholder={"Введите название"}
        onChange={nameHandler}
        isDanger={isNameError}
        dangerText="Пустое поле"
      />
      <View style={styles.modalBtns}>
        <AppTextButton onPress={hideModal}>Закрыть</AppTextButton>
        <AppTextButton onPress={editProject}>Сохранить</AppTextButton>
      </View>
    </AppModal>
  );
};
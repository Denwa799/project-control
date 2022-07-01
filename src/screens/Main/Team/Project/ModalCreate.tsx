import React, { FC, useCallback, useState } from "react";
import { AppField } from "../../../../components/AppField";
import { View } from "react-native";
import { styles } from "./styles";
import { AppTextButton } from "../../../../components/AppTextButton";
import { AppModal } from "../../../../components/AppModal";
import { serverTimestamp } from "firebase/firestore";
import { create } from "../../../../firebase";
import { IModalCreate } from "./types";

export const ModalCreate: FC<IModalCreate> = (
  {
    modalCreateVisible,
    setModalCreateVisible,
    collectionPath
  }) => {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [responsibleFieldValue, setResponsibleFieldValue] = useState("");

  const [isTextFieldError, setIsTextFieldError] = useState(false);
  const [isResponsibleFieldError, setIsResponsibleFieldError] = useState(false);

  const clearFields = useCallback(() => {
    setTextFieldValue("");
    setResponsibleFieldValue("");
    setIsTextFieldError(false);
    setIsResponsibleFieldError(false);
  }, []);

  const hideCreateModal = useCallback(() => {
    setModalCreateVisible(false);
    clearFields();
  }, [modalCreateVisible]);

  const textFieldHandler = useCallback((value: string) => {
    setTextFieldValue(value);
    setIsTextFieldError(false);
  }, [textFieldValue]);

  const responsibleFieldHandler = useCallback((value: string) => {
    setResponsibleFieldValue(value);
    setIsResponsibleFieldError(false);
  }, [responsibleFieldValue]);

  const addTask = useCallback(() => {
    if (!textFieldValue) return setIsTextFieldError(true);
    if (!responsibleFieldValue) return setIsResponsibleFieldError(true);

    const data = {
      text: textFieldValue,
      status: "notCompleted",
      responsible: responsibleFieldValue,
      created: serverTimestamp()
    };
    create(collectionPath, data);
    hideCreateModal();
  }, [textFieldValue, responsibleFieldValue]);

  return (
    <AppModal
      visible={modalCreateVisible}
      onDismiss={hideCreateModal}
    >
      <AppField
        value={textFieldValue}
        placeholder={"Введите текст"}
        onChange={textFieldHandler}
        isDanger={isTextFieldError}
        dangerText="Пустое поле"
      />
      <AppField
        value={responsibleFieldValue}
        placeholder={"Введите имя ответственного"}
        onChange={responsibleFieldHandler}
        isDanger={isResponsibleFieldError}
        dangerText="Пустое поле"
      />
      <View style={styles.modalBtns}>
        <AppTextButton onPress={hideCreateModal}>Закрыть</AppTextButton>
        <AppTextButton onPress={addTask}>Создать</AppTextButton>
      </View>
    </AppModal>
  );
};

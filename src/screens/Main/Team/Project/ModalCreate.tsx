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
  const [textValue, setTextValue] = useState("");
  const [responsibleValue, setResponsibleValue] = useState("");

  const [isTextError, setIsTextError] = useState(false);
  const [isResponsibleError, setIsResponsibleError] = useState(false);

  const clears = useCallback(() => {
    setTextValue("");
    setResponsibleValue("");
    setIsTextError(false);
    setIsResponsibleError(false);
  }, []);

  const hideCreateModal = useCallback(() => {
    setModalCreateVisible(false);
    clears();
  }, [modalCreateVisible]);

  const textHandler = useCallback((value: string) => {
    setTextValue(value);
    setIsTextError(false);
  }, [textValue]);

  const responsibleHandler = useCallback((value: string) => {
    setResponsibleValue(value);
    setIsResponsibleError(false);
  }, [responsibleValue]);

  const addTask = useCallback(() => {
    if (!textValue) return setIsTextError(true);
    if (!responsibleValue) return setIsResponsibleError(true);

    const data = {
      text: textValue,
      status: "notCompleted",
      responsible: responsibleValue,
      created: serverTimestamp()
    };
    create(collectionPath, data);
    hideCreateModal();
  }, [textValue, responsibleValue]);

  return (
    <AppModal
      visible={modalCreateVisible}
      onDismiss={hideCreateModal}
    >
      <AppField
        value={textValue}
        placeholder={"Введите текст"}
        onChange={textHandler}
        isDanger={isTextError}
        dangerText="Пустое поле"
      />
      <AppField
        value={responsibleValue}
        placeholder={"Введите имя ответственного"}
        onChange={responsibleHandler}
        isDanger={isResponsibleError}
        dangerText="Пустое поле"
      />
      <View style={styles.modalBtns}>
        <AppTextButton onPress={hideCreateModal}>Закрыть</AppTextButton>
        <AppTextButton onPress={addTask}>Создать</AppTextButton>
      </View>
    </AppModal>
  );
};

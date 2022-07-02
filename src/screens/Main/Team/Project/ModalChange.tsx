import React, { FC, useCallback, useEffect, useState } from "react";
import { AppField } from "../../../../components/AppField";
import { View } from "react-native";
import { styles } from "./styles";
import { AppTextButton } from "../../../../components/AppTextButton";
import { AppModal } from "../../../../components/AppModal";
import { updateDocument } from "../../../../firebase";
import { IModalChange } from "./types";
import { RadioBtns } from "./RadioBtns";

export const ModalChange: FC<IModalChange> = (
  {
    modalChangeVisible,
    setModalChangeVisible,
    text,
    responsible,
    status,
    collectionPath,
    taskId
  }) => {
  const [textValue, setTextValue] = useState("");
  const [responsibleValue, setResponsibleValue] = useState("");

  const [isTextError, setIsTextError] = useState(false);
  const [isResponsibleError, setIsResponsibleError] = useState(false);

  const [activeRadioBtn, setActiveRadioBtn] = useState("");

  useEffect(() => {
    setTextValue(text);
    setResponsibleValue(responsible);
    setActiveRadioBtn(status);
  }, [modalChangeVisible]);

  const hideModal = useCallback(() => {
    setModalChangeVisible(false);
  }, [modalChangeVisible]);

  const textHandler = useCallback((value: string) => {
    setTextValue(value);
    setIsTextError(false);
  }, [textValue]);

  const responsibleHandler = useCallback((value: string) => {
    setResponsibleValue(value);
    setIsResponsibleError(false);
  }, [responsibleValue]);

  const editTask = useCallback(() => {
    if (!textValue) return setIsTextError(true);
    if (!responsibleValue) return setIsResponsibleError(true);

    const data = {
      text: textValue,
      responsible: responsibleValue,
      status: activeRadioBtn
    };

    updateDocument(collectionPath, taskId, data);
    hideModal();
  }, [textValue, responsibleValue, activeRadioBtn]);

  return (
    <AppModal
      visible={modalChangeVisible}
      onDismiss={hideModal}
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
      <RadioBtns
        activeRadioBtn={activeRadioBtn}
        setActiveRadioBtn={setActiveRadioBtn}
      />
      <View style={styles.modalBtns}>
        <AppTextButton onPress={hideModal}>Закрыть</AppTextButton>
        <AppTextButton onPress={editTask}>Сохранить</AppTextButton>
      </View>
    </AppModal>
  );
};

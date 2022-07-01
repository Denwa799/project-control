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
  const [changeTextFieldValue, setChangeTextFieldValue] = useState(text);
  const [changeResponsibleFieldValue, setChangeResponsibleFieldValue] = useState("");

  const [isChangeTextFieldError, setIsChangeTextFieldError] = useState(false);
  const [isChangeResponsibleFieldError, setIsChangeResponsibleFieldError] = useState(false);

  const [activeRadioBtn, setActiveRadioBtn] = useState("");

  useEffect(() => {
    setChangeTextFieldValue(text);
    setChangeResponsibleFieldValue(responsible);
    setActiveRadioBtn(status);
  }, [modalChangeVisible]);

  const hideChangeModal = useCallback(() => {
    setModalChangeVisible(false);
  }, [modalChangeVisible]);

  const changeTextFieldHandler = useCallback((value: string) => {
    setChangeTextFieldValue(value);
    setIsChangeTextFieldError(false);
  }, [changeTextFieldValue]);

  const changeResponsibleFieldHandler = useCallback((value: string) => {
    setChangeResponsibleFieldValue(value);
    setIsChangeResponsibleFieldError(false);
  }, [changeResponsibleFieldValue]);

  const editTask = useCallback(() => {
    if (!changeTextFieldValue) return setIsChangeTextFieldError(true);
    if (!changeResponsibleFieldValue) return setIsChangeResponsibleFieldError(true);

    const data = {
      text: changeTextFieldValue,
      responsible: changeResponsibleFieldValue,
      status: activeRadioBtn
    };

    updateDocument(collectionPath, taskId, data);
    hideChangeModal();
  }, [changeTextFieldValue, changeResponsibleFieldValue, activeRadioBtn]);

  return (
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
      <RadioBtns
        activeRadioBtn={activeRadioBtn}
        setActiveRadioBtn={setActiveRadioBtn}
      />
      <View style={styles.modalBtns}>
        <AppTextButton onPress={hideChangeModal}>Закрыть</AppTextButton>
        <AppTextButton onPress={editTask}>Сохранить</AppTextButton>
      </View>
    </AppModal>
  );
};

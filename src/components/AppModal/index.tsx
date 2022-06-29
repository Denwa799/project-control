import React, { FC } from "react";
import { Modal } from "react-native-paper";
import { styles } from "./styles";
import { IAppModal } from "./types";

export const AppModal: FC<IAppModal> = ({ children, visible, onDismiss, style }) => {
  return (
    <Modal
      visible={visible}
      onDismiss={onDismiss}
      contentContainerStyle={[styles.modalContainer, style]}
      style={styles.modalWrapper}
    >
      {children}
    </Modal>
  );
};

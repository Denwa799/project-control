import React, { FC, useCallback } from "react";
import { IModalDelete } from "./types";
import { Dialog } from "react-native-paper";
import { AppTextButton } from "../../../components/AppTextButton";
import { deleteDocument } from "../../../firebase";

export const ModalDelete: FC<IModalDelete> = (
  {
    dialogDeleteVisible,
    setDialogDeleteVisible,
    collectionPath,
    projectId
  }) => {
  const hideDialog = useCallback(() => {
    setDialogDeleteVisible(false);
  }, [dialogDeleteVisible]);

  const onDelete = useCallback(() => {
    deleteDocument(collectionPath, projectId);
    setDialogDeleteVisible(false);
  }, [projectId]);

  return (
    <Dialog visible={dialogDeleteVisible} onDismiss={hideDialog}>
      <Dialog.Title>
        Удалить проект?
      </Dialog.Title>
      <Dialog.Actions>
        <AppTextButton onPress={hideDialog}>Нет</AppTextButton>
        <AppTextButton onPress={onDelete}>Да</AppTextButton>
      </Dialog.Actions>
    </Dialog>
  );
};

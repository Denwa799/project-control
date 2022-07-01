import React, { FC, useCallback } from "react";
import { IModalDelete } from "./types";
import { deleteDocument } from "../../../../firebase";
import { Dialog } from "react-native-paper";
import { AppTextButton } from "../../../../components/AppTextButton";

export const ModalDelete: FC<IModalDelete> = (
  {
    dialogDeleteVisible,
    setDialogDeleteVisible,
    collectionPath,
    taskId
  }
) => {
  const hideDialog = useCallback(() => {
    setDialogDeleteVisible(false);
  }, [dialogDeleteVisible]);

  const onDelete = useCallback(() => {
    deleteDocument(collectionPath, taskId);
    setDialogDeleteVisible(false);
  }, [taskId]);

  return (
    <Dialog visible={dialogDeleteVisible} onDismiss={hideDialog}>
      <Dialog.Title>
        Удалить задачу?
      </Dialog.Title>
      <Dialog.Actions>
        <AppTextButton onPress={hideDialog}>Нет</AppTextButton>
        <AppTextButton onPress={onDelete}>Да</AppTextButton>
      </Dialog.Actions>
    </Dialog>
  );
};

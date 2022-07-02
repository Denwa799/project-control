import React, { FC, useCallback } from "react";
import { deleteDocument } from "../../firebase";
import { Dialog } from "react-native-paper";
import { AppTextButton } from "../../components/AppTextButton";
import { IModalDelete } from "./types";

export const ModalDelete: FC<IModalDelete> = (
  {
    dialogDeleteVisible,
    setDialogDeleteVisible,
    collectionPath,
    teamId
  }) => {
  const hideDialog = useCallback(() => {
    setDialogDeleteVisible(false);
  }, [dialogDeleteVisible]);

  const onDelete = useCallback(() => {
    deleteDocument(collectionPath, teamId);
    setDialogDeleteVisible(false);
  }, [teamId]);

  return (
    <Dialog visible={dialogDeleteVisible} onDismiss={hideDialog}>
      <Dialog.Title>
        Удалить команду?
      </Dialog.Title>
      <Dialog.Actions>
        <AppTextButton onPress={hideDialog}>Нет</AppTextButton>
        <AppTextButton onPress={onDelete}>Да</AppTextButton>
      </Dialog.Actions>
    </Dialog>
  );
};

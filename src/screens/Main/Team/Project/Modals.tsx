import React, { FC } from "react";
import { IModals } from "./types";
import { ModalDelete } from "./ModalDelete";
import { ModalCreate } from "./ModalCreate";
import { ModalChange } from "./ModalChange";

export const Modals: FC<IModals> = (
  {
    teamId,
    projectId,
    dialogDeleteVisible,
    setDialogDeleteVisible,
    modalCreateVisible,
    setModalCreateVisible,
    taskId,
    modalChangeVisible,
    setModalChangeVisible,
    text,
    responsible,
    status
  }) => {
  const collectionPath = `teams/${teamId}/projects/${projectId}/tasks`;

  return (
    <>
      <ModalDelete
        taskId={taskId}
        collectionPath={collectionPath}
        dialogDeleteVisible={dialogDeleteVisible}
        setDialogDeleteVisible={setDialogDeleteVisible}
      />
      <ModalCreate
        modalCreateVisible={modalCreateVisible}
        setModalCreateVisible={setModalCreateVisible}
        collectionPath={collectionPath}
      />
      <ModalChange
        text={text}
        collectionPath={collectionPath}
        taskId={taskId}
        responsible={responsible}
        modalChangeVisible={modalChangeVisible}
        setModalChangeVisible={setModalChangeVisible}
        status={status}
      />
    </>
  );
};

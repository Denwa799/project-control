import React, { FC } from "react";
import { ModalChange } from "./ModalChange";
import { ModalCreate } from "./ModalCreate";
import { ModalDelete } from "./ModalDelete";
import { IModals } from "./types";

export const Modals: FC<IModals> = (
  {
    modalCreateVisible,
    setModalCreateVisible,
    teamId,
    projectId,
    dialogDeleteVisible,
    setDialogDeleteVisible,
    modalChangeVisible,
    setModalChangeVisible,
    name
  }
) => {
  const collectionPath = `teams/${teamId}/projects`;

  return (
    <>
      <ModalDelete
        projectId={projectId}
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
        name={name}
        collectionPath={collectionPath}
        modalChangeVisible={modalChangeVisible}
        setModalChangeVisible={setModalChangeVisible}
        projectId={projectId}
      />
    </>
  );
};
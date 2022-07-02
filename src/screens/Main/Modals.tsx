import React, { FC } from "react";
import { ModalDelete } from "./ModalDelete";
import { IModals } from "./types";
import { ModalCreate } from "./ModalCreate";
import { ModalChange } from "./ModalChange";

export const Modals: FC<IModals> = (
  {
    modalCreateVisible,
    setModalCreateVisible,
    teamId,
    dialogDeleteVisible,
    setDialogDeleteVisible,
    modalChangeVisible,
    setModalChangeVisible,
    name
  }) => {
  const collectionPath = `teams`;

  return (
    <>
      <ModalDelete
        teamId={teamId}
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
        modalChangeVisible={modalChangeVisible}
        setModalChangeVisible={setModalChangeVisible}
        name={name}
        teamId={teamId}
        collectionPath={collectionPath}
      />
    </>
  );
};
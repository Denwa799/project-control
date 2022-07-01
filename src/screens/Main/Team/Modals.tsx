import React, { FC } from "react";
import { ModalCreate } from "./ModalCreate";
import { IModals } from "./types";

export const Modals: FC<IModals> = (
  {
    modalCreateVisible,
    setModalCreateVisible,
    teamId
  }
) => {
  const collectionPath = `teams/${teamId}/projects`;

  return (
    <>
      <ModalCreate
        modalCreateVisible={modalCreateVisible}
        setModalCreateVisible={setModalCreateVisible}
        collectionPath={collectionPath}
      />
    </>
  );
};
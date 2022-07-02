export type TeamScreenNavigateType = {
  Team: {
    teamId: string;
  };
};

export interface IModals {
  modalCreateVisible: boolean;
  setModalCreateVisible: (value: boolean) => void;
  teamId: string;
  dialogDeleteVisible: boolean;
  setDialogDeleteVisible: (value: boolean) => void;
  name: string;
  modalChangeVisible: boolean;
  setModalChangeVisible: (value: boolean) => void;
}

export interface IModalCreate {
  modalCreateVisible: boolean;
  setModalCreateVisible: (value: boolean) => void;
  collectionPath: string;
}

export interface IModalDelete {
  dialogDeleteVisible: boolean;
  setDialogDeleteVisible: (value: boolean) => void;
  collectionPath: string;
  teamId: string;
}

export interface IModalChange {
  modalChangeVisible: boolean;
  setModalChangeVisible: (value: boolean) => void;
  name: string;
  teamId: string;
  collectionPath: string;
}
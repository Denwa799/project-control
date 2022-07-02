export interface ITeamScreen {
  route: any;
}

export type ProjectScreenNavigateType = {
  Project: {
    teamId: string;
    projectId: string;
  };
};

export interface IModals {
  modalCreateVisible: boolean;
  setModalCreateVisible: (value: boolean) => void;
  teamId: string;
  projectId: string;
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
  projectId: string;
}

export interface IModalChange {
  modalChangeVisible: boolean;
  setModalChangeVisible: (value: boolean) => void;
  name: string;
  projectId: string;
  collectionPath: string;
}

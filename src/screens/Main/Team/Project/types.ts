export interface IProjectScreen {
  route: any;
}

export interface IModals {
  teamId: string;
  projectId: string;
  dialogDeleteVisible: boolean;
  setDialogDeleteVisible: (value: boolean) => void;
  modalCreateVisible: boolean;
  setModalCreateVisible: (value: boolean) => void;
  taskId: string;
  modalChangeVisible: boolean;
  setModalChangeVisible: (value: boolean) => void;
  text: string;
  responsible: string;
  status: string;
}

export interface IModalDelete {
  dialogDeleteVisible: boolean;
  setDialogDeleteVisible: (value: boolean) => void;
  collectionPath: string;
  taskId: string;
}

export interface IModalCreate {
  modalCreateVisible: boolean;
  setModalCreateVisible: (value: boolean) => void;
  collectionPath: string;
}

export interface IModalChange {
  modalChangeVisible: boolean;
  setModalChangeVisible: (value: boolean) => void;
  text: string;
  responsible: string;
  status: string;
  collectionPath: string;
  taskId: string;
}

export interface IRadioBtns {
  activeRadioBtn: string;
  setActiveRadioBtn: (value: string) => void;
}
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
}
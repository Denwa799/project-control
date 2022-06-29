export interface IProjectScreen {
  route: any;
}

export interface IModals {
  teamId: string;
  projectId: string;
  dialogVisible: boolean;
  setDialogVisible: (value: boolean) => void;
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  taskId: string;
}
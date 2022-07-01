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
}

export interface IModalCreate {
  modalCreateVisible: boolean;
  setModalCreateVisible: (value: boolean) => void;
  collectionPath: string;
}
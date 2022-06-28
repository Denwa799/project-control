import { ITask } from "../../../models/ITask";

export interface ITeamScreen {
  route: any;
}

export type ProjectScreenNavigateType = {
  Project: {
    tasks: ITask[];
  };
};
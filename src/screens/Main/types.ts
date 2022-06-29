import { IProject } from "../../models/IProject";

export type TeamScreenNavigateType = {
  Team: {
    teamId: string;
    projects: IProject[];
  };
};
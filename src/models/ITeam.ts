import { IProject } from "./IProject";

export interface ITeam {
  id: string;
  name: string;
  projects: IProject[];
}
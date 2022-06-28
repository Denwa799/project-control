import { ITask } from "./ITask";

export interface IProject {
  id: string;
  name: string;
  tasks: ITask[];
}
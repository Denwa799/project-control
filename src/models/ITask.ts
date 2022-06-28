export interface ITask {
  id: string;
  text: string;
  status: "notCompleted" | "inProgress" | "done";
  responsible: string;
}
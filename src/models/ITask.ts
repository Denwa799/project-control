export interface ITask {
  _id: string;
  text: string;
  status: "notCompleted" | "inProgress" | "done";
  responsible: string;
}
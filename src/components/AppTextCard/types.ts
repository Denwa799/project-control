export interface IAppTextCard {
  text: string;
  status: "notCompleted" | "inProgress" | "done";
  responsible: string;
}
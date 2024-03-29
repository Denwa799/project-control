export interface IAppTextCard {
  _id: string;
  text: string;
  status: "notCompleted" | "inProgress" | "done";
  responsible: string;
  onDelete?: (_id: string) => void;
  onChange?: (_id: string, text: string, responsible: string, status: string) => void;
}
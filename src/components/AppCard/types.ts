export interface IAppCard {
  _id: string;
  name: string;
  item: any;
  onOpen: (item: any) => void;
  onDelete?: (_id: string) => void;
  onChange?: (_id: string, name: string) => void;
}
export interface IAppTextList {
  data: any; //Необходим any, так как по итогу передается в FlatList, data которого равна any
  style?: Object;
  onDelete?: (_id: string) => void;
  onChange?: (_id: string, text: string, responsible: string, status: string) => void;
}
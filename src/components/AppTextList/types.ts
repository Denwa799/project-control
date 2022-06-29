export interface IAppTextList {
  data: any; //Необходим any, так как по итогу передается в FlatList, data которого равна any
  style?: Object;
  onDelete?: (_id: string) => void;
}
export interface IMessage {
  message: string,
  date: Date,
  user: string
}

export interface IRoom {
  name: string;
  messages: IMessage[];
}

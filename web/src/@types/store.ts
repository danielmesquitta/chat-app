export interface IMessageData {
  id: string;
  message: string;
}

export interface IReduxState {
  chat: IMessageData[];
}

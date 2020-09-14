export interface IMessageData {
  userId: string;
  message: string;
  userName: string;
}

export interface IUser {
  id: string;
  name: string;
}

export interface IReduxState {
  chat: IMessageData[];
  user: IUser;
}

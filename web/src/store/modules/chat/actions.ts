import { IMessageData } from '~/@types/store';

export default {
  addMessage(messageData: IMessageData) {
    return { type: '@chat/ADD_MESSAGE', payload: messageData };
  },
};

import { IMessageData } from '~/@types/store';

export default {
  addToCart(messageData: IMessageData) {
    return { type: '@chat/ADD', payload: messageData };
  },
};

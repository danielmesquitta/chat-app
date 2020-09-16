import produce from 'immer';

import { IMessageData } from '~/@types/store';

const INITIAL_STATE: IMessageData[] = [];

interface Action {
  type: string;
  payload: IMessageData;
}

const cart = produce((draft: IMessageData[], action: Action) => {
  switch (action.type) {
    case '@chat/ADD_MESSAGE': {
      const isNotRepeatedAdminMessage =
        draft.findIndex(
          ({ message, userName }) =>
            userName === 'Admin' && message === action.payload.message
        ) === -1;

      if (isNotRepeatedAdminMessage) {
        draft.push(action.payload);
      }
      break;
    }
  }
}, INITIAL_STATE);

export default cart;

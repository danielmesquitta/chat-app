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
      const isSpam = draft.findIndex(item => item === action.payload) >= 0;
      if (!isSpam) {
        draft.push(action.payload);
      }
      break;
    }
  }
}, INITIAL_STATE);

export default cart;

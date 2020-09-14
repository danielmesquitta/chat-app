import produce from 'immer';

import { IUser } from '~/@types/store';

const INITIAL_STATE: IUser = { id: '', name: '' };

interface Action {
  type: string;
  payload: IUser;
}

const user = produce((draft: IUser, action: Action) => {
  switch (action.type) {
    case '@user/CREATE': {
      return (draft = action.payload);
    }
  }
}, INITIAL_STATE);

export default user;

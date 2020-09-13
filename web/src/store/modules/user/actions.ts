import { IUser } from '~/@types/store';

export default {
  createUser(user: IUser) {
    return { type: '@user/CREATE', payload: user };
  },
};

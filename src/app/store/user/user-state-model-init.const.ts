import { v4 as uuidv4 } from 'uuid';
import { UserStateModel } from './user-state-model.interface';

export const initUserStateModel: UserStateModel = {
  likes: [],
  dislikes: [],
  isOnline: true
};

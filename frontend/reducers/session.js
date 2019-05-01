import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './session';

const nullSession = {
  currentUser: null
};

export default (oldState=nullSession, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return Object.assign({}, { currentUser });
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return oldState;
  }
};

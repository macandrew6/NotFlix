import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

const nullSession = {
  id: null
};

export default (oldState=nullSession, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.user.id });
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return oldState;
  }
  
};

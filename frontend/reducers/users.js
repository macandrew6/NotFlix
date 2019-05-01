import { RECEIVE_CURRENT_USER } from '../actions/session';

export default (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, oldState, {[action.user.id]: action.user});
    default:
      return oldState;
  }
  
};
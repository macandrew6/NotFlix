import { 
  RECEIVE_SESSION_ERRORS, 
  CLEAR_ERRORS 
} from '../../actions/session_action';

export default (oldState=[], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return oldState;
  }
};
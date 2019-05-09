import { RECEIVE_USER_MOVIES } from '../../actions/my_list';

export default (oldState=[], action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_MOVIES:
      const newState = action.userMovies.slice();
      return newState;
    default:
      return oldState;
  }
};
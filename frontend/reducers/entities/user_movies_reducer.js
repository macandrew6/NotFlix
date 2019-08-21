import { RECEIVE_USER_MOVIES } from '../../actions/my_list';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_MOVIES:
      return merge({}, oldState, action.userMovies);
    default:
      return oldState;
  }
};
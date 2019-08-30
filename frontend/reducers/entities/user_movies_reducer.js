import { 
  RECEIVE_USER_MOVIES, 
  REMOVE_USER_MOVIE,
  CLEAR_USER_MOVIES
} from '../../actions/my_list_action';

import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_MOVIES:
      return merge({}, oldState, action.userMovies);
    case REMOVE_USER_MOVIE:
      return action.remainingUserMovies;  
    case CLEAR_USER_MOVIES:
      return {};  
    default:
      return oldState;
  }
};
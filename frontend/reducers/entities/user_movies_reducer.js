import { 
  RECEIVE_USER_MOVIES, 
  REMOVE_USER_MOVIE 
} from '../../actions/my_list_action';

import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_USER_MOVIES:
      return merge({}, oldState, action.userMovies);
    case REMOVE_USER_MOVIE:
      let newState = merge({}, oldState);
      console.log(action);
      delete newState[action.id];
      return newState;    
    default:
      return oldState;
  }
};
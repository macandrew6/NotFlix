import { RECEIVE_ALL_MOVIES } from '../../actions/movies';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return merge({}, oldState, action.movies);
    default:
      return oldState;
  }
};
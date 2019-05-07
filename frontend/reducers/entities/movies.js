import { RECEIVE_ALL_MOVIES, RECEIVE_MOVIE } from '../../actions/movies';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MOVIES:
      return merge({}, oldState, action.movies);
    case RECEIVE_MOVIE:
    // debugger;
      return merge({}, oldState, {[action.movie.id]: action.movie});
    default:
      return oldState;
  }
};
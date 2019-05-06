import { RECEIVE_ALL_MOVIE_GENRES } from '../../actions/movie_genres';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_MOVIE_GENRES:
      return merge({}, oldState, action.movieGenres);
    default:
      return oldState;
  }
};
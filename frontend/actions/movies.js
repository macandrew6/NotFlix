import * as MoviesUtil from '../util/movies';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';

const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

export const fetchMovies = () => dispatch => (
  MoviesUtil.fetchMovies()
    .then(movies => dispatch(receiveAllMovies(movies)))
);
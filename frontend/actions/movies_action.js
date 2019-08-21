import * as MoviesUtil from '../util/movies_util';

export const RECEIVE_ALL_MOVIES = 'RECEIVE_ALL_MOVIES';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

const receiveAllMovies = movies => ({
  type: RECEIVE_ALL_MOVIES,
  movies
});

const receiveMovie = movie => ({
  type: RECEIVE_MOVIE,
  movie
});

export const fetchMovies = () => dispatch => (
  MoviesUtil.fetchMovies()
    .then(movies => dispatch(receiveAllMovies(movies)))
);

export const fetchMovie = (id) => dispatch => (
  MoviesUtil.fetchMovie(id)
    .then(movie => dispatch(receiveMovie(movie)))
);

export const updateMovie = (data) => dispatch => (
  MoviesUtil.updateMovie(data)
    .then(movie => dispatch(receiveMovie(movie)))
);

import * as UserMoviesUtil from '../util/user_movies';

export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';

const receiveUserMovies = (userMovies) => ({
  type: RECEIVE_USER_MOVIES,
  userMovies
}); 

export const fetchUserMovies = () => dispatch => (
  UserMoviesUtil.fetchUserMovies()
    .then(movies => dispatch(receiveUserMovies(movies)))
);

export const postUserMovie = (association) => dispatch => (
  UserMoviesUtil.postUserMovie(association)
    .then(() => dispatch(receiveUserMovies()))
);

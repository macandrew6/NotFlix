import * as UserMoviesUtil from '../util/user_movies';

export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
// export const RECEIVE_USER_MOVIE = 'RECEIVE_USER_MOVIE';

const receiveUserMovies = (userMovies) => ({
  type: RECEIVE_USER_MOVIES,
  userMovies
}); 

// const receiveUserMovie = (userMovie) => ({
//   type: RECEIVE_USER_MOVIE,
//   userMovie
// });

export const fetchUserMovies = () => dispatch => (
  UserMoviesUtil.fetchUserMovies()
    .then(movies => dispatch(receiveUserMovies(movies)))
);

export const postUserMovie = (association) => dispatch => (
  UserMoviesUtil.postUserMovie(association)
    .then(() => dispatch(receiveUserMovies()))
);

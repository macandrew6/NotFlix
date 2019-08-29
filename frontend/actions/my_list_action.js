import * as UserMoviesUtil from '../util/user_movies_util';

export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
export const REMOVE_USER_MOVIE = 'REMOVE_USER_MOVIE';

const receiveUserMovies = (userMovies) => ({
  type: RECEIVE_USER_MOVIES,
  userMovies
}); 

const deleteUserMovie = (remainingUserMovies) => ({
  type: REMOVE_USER_MOVIE,
  remainingUserMovies
});

export const fetchUserMovies = () => dispatch => (
  UserMoviesUtil.fetchUserMovies()
    .then(movies => {
      dispatch(receiveUserMovies(movies));
    })
);

export const postUserMovie = (association) => dispatch => {
  return (
    UserMoviesUtil.postUserMovie(association)
      .then(userMovies => {
        dispatch(receiveUserMovies(userMovies));
      })
    );
};

export const removeUserMovie = id => dispatch => {
  return (
    UserMoviesUtil.removeUserMovie(id)
      .then((remainingUserMovies) => dispatch(deleteUserMovie(remainingUserMovies)))
  );
};

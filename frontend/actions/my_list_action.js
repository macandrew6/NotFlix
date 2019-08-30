import * as UserMoviesUtil from '../util/user_movies_util';

export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
export const REMOVE_USER_MOVIE = 'REMOVE_USER_MOVIE';
export const CLEAR_USER_MOVIES = 'CLEAR_USER_MOVIES';

const receiveUserMovies = (userMovies) => ({
  type: RECEIVE_USER_MOVIES,
  userMovies
}); 

const deleteUserMovie = (remainingUserMovies) => ({
  type: REMOVE_USER_MOVIE,
  remainingUserMovies
});

export const clearUserMovies = () => {
  console.log("im here baby");
  return ({
    type: CLEAR_USER_MOVIES
  });
};

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

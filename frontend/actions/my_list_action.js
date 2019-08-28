import * as UserMoviesUtil from '../util/user_movies_util';

export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
export const REMOVE_USER_MOVIE = 'REMOVE_USER_MOVIE';

const receiveUserMovies = (userMovies) => ({
  type: RECEIVE_USER_MOVIES,
  userMovies
}); 

const deleteUserMovie = (id) => ({
  type: REMOVE_USER_MOVIE,
  id
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
      .then(() => dispatch(receiveUserMovies()))
    );
};

export const removeUserMovie = id => dispatch => {
  console.log(id);
  return (
    UserMoviesUtil.removeUserMovie(id)
      .then((id) => dispatch(deleteUserMovie(id)))
  );
};

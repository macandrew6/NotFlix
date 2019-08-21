import { combineReducers } from 'redux';
import usersReducer from '../../reducers/sessions/users';
import moviesReducer from '../../reducers/entities/movies_reducer';
import genresReducer from '../../reducers/entities/genres_reducer';
import userMoviesReducer from '../../reducers/entities/user_movies_reducer';

export default combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  genres: genresReducer,
  userMovies: userMoviesReducer
});

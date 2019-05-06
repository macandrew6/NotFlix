import { combineReducers } from 'redux';
import usersReducer from '../../reducers/sessions/users';
import moviesReducer from '../../reducers/entities/movies';
import genresReducer from '../../reducers/entities/genres';
import movieGenresReducer from '../../reducers/entities/movie_genres';

export default combineReducers({
  users: usersReducer,
  movies: moviesReducer,
  genres: genresReducer,
  movieGenres: movieGenresReducer
});

import { combineReducers } from 'redux';
import usersReducer from '../../reducers/sessions/users';
import moviesReducer from '../../reducers/entities/movies';

export default combineReducers({
  users: usersReducer,
  movies: moviesReducer
});

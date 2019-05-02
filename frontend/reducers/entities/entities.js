import { combineReducers } from 'redux';
import usersReducer from '../../reducers/sessions/users';

export default combineReducers({
  users: usersReducer
});

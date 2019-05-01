import { combineReducers } from 'redux';
import sessionReducer from './session';
import entitiesReducer from './entities';
import errorsReducers from './errors';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducers
});
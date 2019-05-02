import { combineReducers } from 'redux';
import sessionReducer from './sessions/session';
import entitiesReducer from './entities/entities';
import errorsReducers from './errors/errors';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducers
});
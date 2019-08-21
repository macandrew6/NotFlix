import { combineReducers } from 'redux';
import sessionReducer from './sessions/session_reducer';
import entitiesReducer from './entities/entities_reducer';
import errorsReducers from './errors/errors_reducer';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducers
});
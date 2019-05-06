import { RECEIVE_GENRES } from '../../actions/genres';
import merge from 'lodash/merge';

export default (oldState={}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_GENRES:
      return merge({}, oldState, action.genres);
    default:
      return oldState;
  }
};
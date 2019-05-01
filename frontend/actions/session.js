import * as SessionUtil from 'session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signUp = userForm => dispatch => (
  SessionUtil.postUser(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const login = userForm => dispatch => (
  SessionUtil.postSession(userForm)
    .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionUtil.deleteSession()
    .then(() => dispatch(logoutCurrentUser()))
);
import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const removeCurrentUser = () => ({
  type: REMOVE_CURRENT_USER
});

export const login = userData => dispatch => (
  SessionAPIUtil.login(userData)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => console.log(err))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(user => dispatch(removeCurrentUser()))
    .fail(err => console.log(err))
);

export const signup = userData => dispatch => (
  SessionAPIUtil.signup(userData)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => console.log(err))
);

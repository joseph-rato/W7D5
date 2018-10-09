import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'REVEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERROR = 'RECEIVE_SESSION_ERROR'

export const receiveCurrentUser = (user) => {
  type: RECEIVE_CURRENT_USER,
  user
};

export const logoutCurrentUser = () => {
  type: LOGOUT_CURRENT_USER
};

export const receiveError = (errors) => {
  type: RECEIVE_SESSION_ERROR,
  errors
};

export const login = (user) => dispatch => {
  return APIUtil.login(user).then(serverUser => dispatch(receiveCurrentUser(serverUser)));
};

export const logout = () => dispatch => {
  return APIUtil.signout().then( () => dispatch(logoutCurrentUser()));
};

export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then( (serverUser) => dispatch(receiveCurrentUser(serverUser)));
};

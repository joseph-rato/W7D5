import {RECEIVE_SESSION_ERROR, RECEIVE_CURRENT_USER} from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state)
  switch (action.state) {
    case RECEIVE_SESSION_ERROR:
      return Object.assign({}, {errors: action.errors});
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;

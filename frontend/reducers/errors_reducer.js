import sessionErrorsReducer from './session_errors_reducer';
import {combineReducers} from 'redux';

const errorReducer = combineReducers({
  session: sessionErrorsReducer
});

export default errorReducer;

import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMine from '../thunk/thunk';
import logger from 'redux-logger';

const configureStore = (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMine, logger)
  )
}

export default configureStore;

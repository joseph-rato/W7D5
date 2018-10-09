import React from 'react';
import ReactDOM from 'react-dom';
import {login, signout , signup} from './util/session_api_util';
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.login = login;
  window.signout = signout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, root);
});

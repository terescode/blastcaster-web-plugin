/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import rootReducer from './state/reducers';
import BlastApp from './containers/BlastApp';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
    <BlastApp />
  </Provider>,
  document.getElementById('blastcaster-root')
);

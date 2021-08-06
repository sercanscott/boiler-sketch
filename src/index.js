import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import AppContainer from './containers/AppContainer';

import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/**
 * TODO:
 * Implement immutable data ✓
 * Implement selectors ✓
 * Implement redux-saga
 */

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <AppContainer />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);

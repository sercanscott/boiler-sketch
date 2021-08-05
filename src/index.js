import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import AppContainer from './containers/AppContainer';

import appReducer from './reducers/appReducer';

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <AppContainer />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);

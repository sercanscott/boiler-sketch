import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import './index.css';
import AppContainer from './containers/AppContainer';
import SimpleContainer from './containers/SimpleContainer';
import HookContainer from './containers/HookContainer';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window?.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

/** EXAMPLE: Optional Chaining
 * const object = {
 *   first: {
 *     second: {
 *       third: 2
 *     }
 *   }
 * };
 * object.hiThere // undefined => return value
 * object.hiThere.second // cannot find second of undefined => throws error
 * if (object.hiThere && object.hiThere.second) {
 *   ...
 * }
 * object?.hiThere?.second; // undefined => return value / does not throw any errors
 */

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <AppContainer />
      <SimpleContainer />
      <HookContainer />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);

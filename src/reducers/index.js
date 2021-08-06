import { combineReducers } from 'redux';

import appReducer from './appReducer';
import dataReducer from './dataReducer';

const reducers = combineReducers({
  app: appReducer,
  data: dataReducer,
});

export default reducers;

import I from 'immutable';
import { EXAMPLE_ACTION } from '../constants/actionTypes';

const INITIAL_STATE_IMMUTABLE = I.fromJS({
  lotsOfData: ['1', '2', '3'],
})

const dataReducer = (state = INITIAL_STATE_IMMUTABLE, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
    default:
      return state;
  }
};

export default dataReducer;

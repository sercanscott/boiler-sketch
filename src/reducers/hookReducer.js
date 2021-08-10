import I from 'immutable';

const initialState = I.fromJS({
  count: 0
});

function hookReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment':
      return state.set('count', state.get('count') + 1);
    case 'decrement':
      return state.set('count', state.get('count') - 1);
    default:
      throw new Error();
  }
}

export default hookReducer;

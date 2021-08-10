import I from 'immutable';
import { useReducer } from "react";
import hookReducer from "../reducers/hookReducer";

const initialState = I.fromJS({
  count: 0
});


function HookContainer({ initialCount }) {
  // EXAMPLE: useReducer simple usage
  const [state, dispatch] = useReducer(hookReducer, initialState);

  console.log(state);
  return (
    <>
      Count: {state.get('count')}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default HookContainer;

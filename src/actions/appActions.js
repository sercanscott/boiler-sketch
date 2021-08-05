import { EXAMPLE_ACTION } from '../constants/actionTypes';

// this is called an `action creator`
export const exampleAction = () => {
  // returns an object
  return {
    // action type is required
    type: EXAMPLE_ACTION,
    // payload is optional
    payload: {
      examplePayload: new Date().toString(),
    },
  };
};

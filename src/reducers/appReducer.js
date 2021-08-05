import { EXAMPLE_ACTION } from '../constants/actionTypes';

const INITIAL_STATE = {
  exampleStoreVariable: 'Todays Date',
};

// JS Object Mutation Example
// // JS data types, primitive (bool, string, integer|number) cannot be mutated

// // JS data types, object, array can be mutated

// // array mutation
// const array = [1,2,4];
// array.push(4);
// console.log(array); // 1,2,4,4
// const newArray = [...array, 4];
// console.log(newArray, array); // 1,2,4,4 - 1,2,4

// // object mutation
// const object = {
//   a: 1,
//   b: 2,
// };

// object.a = 5;
// object.c = 4;

// console.log(object); // { a: 5, b: 2, c: 4 };

// const newObject = {
//   ...object,
//   a: 5,
//   c: 4,
// };

// console.log(object, newObject); // { a:1, b: 2 } - { a:5, b: 2, c: 4 }


// function xx(obj) {
//   obj.a = 99;
// }

// xx(newObject);

// console.log(newObject);
// // JS Object Mutation Example

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      // mutation is not acceptable for redux. this is an illegal example
      // state.exampleStoreVariable = action.payload.examplePayload;
      return {
        ...state,
        exampleStoreVariable: action.payload.examplePayload,
      };
    default:
      return state;
  }
};

export default appReducer;

// EXAMPLE: Async Programming in JS
// callback
function isOdd(integer, cb) {
  const isOddCheck = integer % 2 !== 0;
  cb(isOddCheck);
}

isOdd(4, console.log);


// Promises
const checkIsOdd = number => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 === 0) {
        reject(`Not odd: ${number}`);
      } else {
        resolve(`Number is odd: ${number}`);
      }
    }, 1000);
  });
};

// then/catch
// checkIsOdd(2)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// async/await
async function resolver() {
  try {
    console.log('before value')
    const value = await checkIsOdd(5);
    console.log('after value')
    return value;
  } catch (error) {
    console.log(error);
  }
}

resolver().then(console.log);

// generators
function* myGenerator() {
  console.log('before first yield');
  yield 'first yield completed';
  console.log('after first yield');
}

const gen = myGenerator();

console.log(
  gen.next(),
  gen.next(),
);

0x01. ES6 Promises
## Promises (How, Why, and What)

### What Promises Are
A promise is an object representing the eventual completion or failure of an asynchronous operation. It is a placeholder for a future value. Promises provide a cleaner, more flexible alternative to callback functions.

### Why Use Promises
Promises help manage asynchronous operations in a more readable and maintainable way. They avoid callback hell, where callbacks are nested within callbacks, making the code hard to read and maintain.

### How Promises Work
A promise can be in one of three states:
1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

A promise is created using the `Promise` constructor, which takes a function (executor) with two parameters: `resolve` and `reject`. These parameters are functions that are called to either fulfill or reject the promise.

### Example
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed.');
  }
});

myPromise
  .then(result => console.log(result)) // Operation was successful!
  .catch(error => console.error(error));
```

## How to Use the `then`, `resolve`, and `catch` Methods

### `then` Method
The `then` method is used to specify what to do when the promise is fulfilled:
```javascript
myPromise.then(result => {
  console.log(result); // Operation was successful!
});
```

### `resolve` Method
The `resolve` method is used inside the executor function to mark the promise as fulfilled:
```javascript
const promise = new Promise((resolve, reject) => {
  resolve('Resolved!');
});
```

### `catch` Method
The `catch` method is used to specify what to do when the promise is rejected:
```javascript
myPromise.catch(error => {
  console.error(error); // Operation failed.
});
```

## How to Use Every Method of the Promise Object

### `all`
The `Promise.all` method takes an array of promises and returns a new promise that resolves when all of the promises in the array have resolved, or rejects if any promise rejects:
```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
});
```

### `race`
The `Promise.race` method takes an array of promises and returns a new promise that resolves or rejects as soon as one of the promises in the array resolves or rejects:
```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(value => {
  console.log(value); // "two"
});
```

### `allSettled`
The `Promise.allSettled` method returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise:
```javascript
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'error');
});

Promise.allSettled([promise1, promise2]).then(results => {
  results.forEach(result => console.log(result.status));
  // "fulfilled"
  // "rejected"
});
```

### `any`
The `Promise.any` method takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array fulfills, or rejects with an AggregateError if all of the promises reject:
```javascript
const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

Promise.any([promise1, promise2, promise3]).then(value => {
  console.log(value); // "quick"
});
```

### `finally`
The `finally` method allows you to execute code once a promise is settled, regardless of whether it was resolved or rejected:
```javascript
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Promise settled.'));
```

## Throw / Try

### Throw
The `throw` statement is used to throw a user-defined exception. Execution of the current function will stop and control will be passed to the first `catch` block in the call stack:
```javascript
function testError() {
  throw new Error('This is an error!');
}

try {
  testError();
} catch (error) {
  console.error(error.message); // This is an error!
}
```

### Try
The `try` statement allows you to define a block of code to be tested for errors while it is being executed:
```javascript
try {
  // Code that may throw an error
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error(error);
} finally {
  // Code to be executed regardless of the try / catch result
  console.log('Operation completed.');
}
```

## The `await` Operator

The `await` operator is used to wait for a Promise. It can only be used inside an `async` function. The `await` expression causes `async` function execution to pause until the Promise is settled:
```javascript
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}

fetchData().then(data => console.log(data));
```

## How to Use an `async` Function

An `async` function is a function declared with the `async` keyword. It can contain `await` expressions, which pause the execution of the `async` function and wait for the Promise to resolve or reject:
```javascript
async function example() {
  try {
    const result = await someAsyncOperation();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Async operation completed.');
  }
}

example();
```

Using `async` and `await` makes asynchronous code easier to read and write, resembling synchronous code while retaining the non-blocking nature of asynchronous operations.
0x00. ES6 Basics

## What ES6 Is

ECMAScript 6 (ES6), also known as ECMAScript 2015, is a significant update to JavaScript, the popular scripting language used for web development. It introduced a variety of new features that made JavaScript more powerful and easier to work with. ES6 was a major step forward in the evolution of JavaScript, addressing many of the language's shortcomings and enhancing its capabilities.

## New Features Introduced in ES6

ES6 introduced several new features and improvements, including:

1. **Arrow Functions**: A shorter syntax for writing functions.
2. **Classes**: A syntactic sugar over JavaScript's prototype-based inheritance.
3. **Template Literals**: Enhanced string capabilities with interpolation.
4. **Destructuring Assignment**: Easier extraction of values from arrays or properties from objects.
5. **Default Parameters**: Ability to set default values for function parameters.
6. **Let and Const**: Block-scoped variables and constants.
7. **Modules**: Support for importing and exporting modules.
8. **Promises**: A new way to handle asynchronous operations.
9. **Rest and Spread Operators**: Improved handling of function parameters and array manipulation.
10. **Iterators and Generators**: New mechanisms for custom iteration.
11. **Maps and Sets**: New data structures for more efficient data handling.

## The Difference Between a Constant and a Variable

In JavaScript, variables and constants are declared using `var`, `let`, and `const`:

- **Variables**: Declared using `var` or `let`. They can be reassigned:
  ```javascript
  let a = 10;
  a = 20; // This is allowed
  ```

- **Constants**: Declared using `const`. They cannot be reassigned after their initial assignment:
  ```javascript
  const b = 30;
  b = 40; // This will throw an error
  ```

## Block-Scoped Variables

ES6 introduced `let` and `const`, which are block-scoped. This means they are only accessible within the block they are declared in, such as within a function, loop, or if statement:
```javascript
{
  let x = 10;
  const y = 20;
  console.log(x); // 10
  console.log(y); // 20
}
console.log(x); // ReferenceError: x is not defined
console.log(y); // ReferenceError: y is not defined
```

## Arrow Functions and Function Parameters Default to Them

Arrow functions provide a concise syntax for writing functions and lexically bind the `this` value, which can simplify code that uses callbacks or methods:
```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Default parameters
const greet = (name = 'Guest') => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
console.log(greet('Alice')); // Hello, Alice!
```

## Rest and Spread Function Parameters

ES6 introduced the rest parameter syntax (`...args`), which allows functions to accept an indefinite number of arguments as an array:
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // 6
```

The spread operator (`...array`) allows an iterable to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected:
```javascript
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3

const newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```

## String Templating in ES6

Template literals are enclosed by backticks (`) and can contain placeholders indicated by the `${}` syntax. This allows for easier string interpolation and multi-line strings:
```javascript
const name = 'Alice';
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Alice!

const multiline = `This is a string
that spans multiple
lines.`;
console.log(multiline);
```

## Object Creation and Their Properties in ES6

ES6 introduced shorthand syntax for object properties and methods, as well as computed property names:
```javascript
const x = 10;
const y = 20;

const obj = {
  x, // Shorthand property
  y,
  calculate() { // Shorthand method
    return this.x + this.y;
  },
  ['prop' + 'Name']: 'value' // Computed property name
};

console.log(obj.calculate()); // 30
console.log(obj.propName); // value
```

## Iterators and For-of Loops

Iterators are objects that allow you to traverse through a collection. The `for-of` loop provides a simpler way to iterate over iterable objects like arrays, strings, maps, and sets:
```javascript
const array = [10, 20, 30];
for (const value of array) {
  console.log(value);
}
// Output: 10 20 30

const string = 'Hello';
for (const char of string) {
  console.log(char);
}
// Output: H e l l o
```

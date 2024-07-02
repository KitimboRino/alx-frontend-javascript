# 0x03. ES6 data manipulation
# JavaScript Array and Data Structure Guide

## Table of Contents
1. [Introduction](#introduction)
2. [Array Methods](#array-methods)
   - [map](#map)
   - [filter](#filter)
   - [reduce](#reduce)
3. [Typed Arrays](#typed-arrays)
4. [Set, Map, and WeakLink Data Structures](#set-map-and-weaklink-data-structures)
   - [Set](#set)
   - [Map](#map)
   - [WeakSet](#weakset)
   - [WeakMap](#weakmap)

## Introduction
This guide covers essential JavaScript array methods (`map`, `filter`, and `reduce`) and introduces typed arrays along with advanced data structures like `Set`, `Map`, `WeakSet`, and `WeakMap`. These tools are crucial for effective and efficient data manipulation and storage in JavaScript.

## Array Methods

### map
The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### filter
The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]
```

### reduce
The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10
```

## Typed Arrays
Typed arrays in JavaScript provide a way to work with binary data directly. They are an array-like view of an underlying binary data buffer.

**Example:**
```javascript
// Create a buffer of 16 bytes
const buffer = new ArrayBuffer(16);

// Create a typed array
const int32View = new Int32Array(buffer);

int32View[0] = 42;
console.log(int32View[0]); // 42
```

## Set, Map, and WeakLink Data Structures

### Set
A `Set` is a collection of values where each value must be unique. It allows for fast insertion, deletion, and has operations.

**Example:**
```javascript
const set = new Set([1, 2, 3, 4, 4]);
set.add(5);
set.delete(1);
console.log(set.has(2)); // true
console.log(set); // Set { 2, 3, 4, 5 }
```

### Map
A `Map` is a collection of key-value pairs where keys can be of any data type. It maintains the order of insertion of the keys.

**Example:**
```javascript
const map = new Map();
map.set('name', 'Alice');
map.set('age', 25);
console.log(map.get('name')); // Alice
console.log(map.has('age')); // true
map.delete('age');
console.log(map.size); // 1
```

### WeakSet
A `WeakSet` is similar to a `Set` but it can only contain objects and does not prevent garbage collection of its items.

**Example:**
```javascript
const weakSet = new WeakSet();
const obj = {};
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
// obj is garbage collected when no other references exist
```

### WeakMap
A `WeakMap` is similar to a `Map` but it can only contain objects as keys and does not prevent garbage collection of its keys.

**Example:**
```javascript
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, 'value');
console.log(weakMap.get(obj)); // value
// obj is garbage collected when no other references exist
```

## Conclusion
Understanding these array methods and data structures is crucial for efficient JavaScript programming. Use `map`, `filter`, and `reduce` for array transformations, typed arrays for handling binary data, and `Set`, `Map`, `WeakSet`, and `WeakMap` for advanced data storage solutions.
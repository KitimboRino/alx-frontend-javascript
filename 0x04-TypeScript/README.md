# 0x04. Typescript

## Introduction

This provide a clear and concise understanding of various fundamental concepts in TypeScript. Whether you're a beginner or looking to brush up on your skills, this guide will cover everything you need to know to get started with TypeScript.

## Table of Contents

1. [Basic Types in TypeScript](#basic-types-in-typescript)
2. [Interfaces, Classes, and Functions](#interfaces-classes-and-functions)
3. [Working with the DOM and TypeScript](#working-with-the-dom-and-typescript)
4. [Generic Types](#generic-types)
5. [Namespaces](#namespaces)
6. [Merging Declarations](#merging-declarations)
7. [Using an Ambient Namespace to Import an External Library](#using-an-ambient-namespace-to-import-an-external-library)
8. [Basic Nominal Typing with TypeScript](#basic-nominal-typing-with-typescript)
9. [Use Cases](#use-cases)

## Basic Types in TypeScript

TypeScript offers several basic types that help in creating robust and type-safe applications. Here are some of the most commonly used types:

- `boolean`: Represents true/false values.
- `number`: Represents both integer and floating-point numbers.
- `string`: Represents text values.
- `array`: Represents a collection of values.
- `tuple`: Represents an array with a fixed number of elements.
- `enum`: Represents a collection of related values.
- `any`: Represents any type of value.
- `void`: Represents the absence of any type.
- `null` and `undefined`: Represent null and undefined values, respectively.

Example:
```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number] = ["hello", 10];
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
let notSure: any = 4;
```

## Interfaces, Classes, and Functions

### Interfaces

Interfaces define the structure of an object. They are a way to describe the shape of an object.

Example:
```typescript
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // optional property
}

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
```

### Classes

Classes are a blueprint for creating objects. They encapsulate data and behavior.

Example:
```typescript
class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}m.`);
    }
}

let cat = new Animal("Cat");
cat.move(10);
```

### Functions

Functions in TypeScript can have typed parameters and return types.

Example:
```typescript
function add(x: number, y: number): number {
    return x + y;
}

let result = add(2, 3);
```

## Working with the DOM and TypeScript

TypeScript can be used to interact with the DOM, providing type safety for DOM manipulation.

Example:
```typescript
const button = document.getElementById('myButton') as HTMLButtonElement;

button.addEventListener('click', () => {
    console.log('Button clicked!');
});
```

## Generic Types

Generics provide a way to create reusable components. They allow a function, class, or interface to work with any data type.

Example:
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello");
let outputNumber = identity<number>(123);
```

## Namespaces

Namespaces are used to organize code in a logical manner, preventing naming conflicts.

Example:
```typescript
namespace Utility {
    export function log(message: string) {
        console.log(message);
    }

    export function error(message: string) {
        console.error(message);
    }
}

Utility.log("Logging a message");
Utility.error("Logging an error");
```

## Merging Declarations

TypeScript allows you to merge multiple declarations into a single definition.

Example:
```typescript
interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
```

## Using an Ambient Namespace to Import an External Library

Ambient namespaces allow you to describe the shape of libraries written in JavaScript, enabling TypeScript to understand them.

Example:
```typescript
declare namespace myLibrary {
    function doSomething(): void;
}

myLibrary.doSomething();
```

## Basic Nominal Typing with TypeScript

Nominal typing refers to a type system where compatibility between types is determined by explicit declarations rather than structural similarity.

Example:
```typescript
type USD = { _brand: "USD" };
type EUR = { _brand: "EUR" };

function charge(amount: USD) {
    // implementation
}

let amount = { _brand: "USD" } as USD;
charge(amount);
```

## Use Cases

### Type-Safe API Responses

When working with API responses, TypeScript ensures that the data you receive adheres to expected types, reducing runtime errors.

Example:
```typescript
interface User {
    id: number;
    name: string;
    email: string;
}

function fetchUser(userId: number): Promise<User> {
    return fetch(`https://api.example.com/users/${userId}`)
        .then(response => response.json())
        .then(data => data as User);
}

fetchUser(1).then(user => {
    console.log(user.name); // Type-safe access to user properties
});
```

### Form Handling in Web Applications

TypeScript can be used to type form data, ensuring that form submissions are handled correctly.

Example:
```typescript
interface FormData {
    username: string;
    password: string;
}

function handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData: FormData = {
        username: (form.elements.namedItem("username") as HTMLInputElement).value,
        password: (form.elements.namedItem("password") as HTMLInputElement).value,
    };
    console.log(formData);
}

document.getElementById("myForm")?.addEventListener("submit", handleSubmit);
```

### Reusable UI Components

Creating reusable UI components with TypeScript ensures that your components are type-safe and can handle various data types.

Example:
```typescript
interface ButtonProps {
    label: string;
    onClick: () => void;
}

function Button(props: ButtonProps) {
    const button = document.createElement("button");
    button.textContent = props.label;
    button.addEventListener("click", props.onClick);
    return button;
}

document.body.appendChild(Button({ label: "Click me", onClick: () => alert("Button clicked!") }));
```

## Conclusion

This guide provides a solid foundation for understanding and working with TypeScript. By mastering these concepts, you'll be well on your way to building robust and type-safe applications. Happy coding!
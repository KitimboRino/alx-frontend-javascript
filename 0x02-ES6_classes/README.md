0x02. ES6 classes

### How to Define a Class
In JavaScript, you can define a class using the `class` keyword. Here is an example:

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

In this example:
- The `User` class has a constructor that takes `firstName` and `lastName` as parameters.
- The `constructor` method is called when a new instance of the class is created.

### How to Add Methods to a Class
You can add methods to a class by defining them inside the class body. Here’s how:

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

In this example:
- The `getFullName` method returns the full name of the user.

### Why and How to Add a Static Method to a Class
Static methods are called on the class itself, not on instances of the class. They are often used for utility functions.

#### Why Use Static Methods:
- They do not depend on instance data.
- They can be used for helper functions that are related to the class but not to any specific instance.

#### How to Add Static Methods:
You can add a static method using the `static` keyword:

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static createAnonymous() {
    return new User("Anonymous", "User");
  }
}
```

In this example:
- The `createAnonymous` static method creates and returns a new instance of `User` with default values.

### How to Extend a Class from Another
You can create a subclass by extending an existing class using the `extends` keyword:

```javascript
class Admin extends User {
  constructor(firstName, lastName, role) {
    super(firstName, lastName); // Call the parent class constructor
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}
```

In this example:
- The `Admin` class extends the `User` class.
- The `constructor` of `Admin` calls the `constructor` of `User` using `super`.
- The `Admin` class adds a new property `role` and a new method `getRole`.

### Metaprogramming and Symbols
Metaprogramming refers to the technique of writing programs that can read, generate, analyze, or transform other programs, and even modify itself while running.

#### Symbols:
Symbols are a new primitive type introduced in ES6, and they are used to create unique identifiers for object properties.

```javascript
const uniqueId = Symbol('id');

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this[uniqueId] = 123; // Using Symbol as a property key
  }

  getId() {
    return this[uniqueId];
  }
}
```

In this example:
- A `Symbol` is created with `Symbol('id')`.
- This symbol is used as a unique key for a property in the `User` class.
- The `getId` method retrieves the value associated with the symbol.

Symbols ensure that property keys are unique and prevent accidental property name collisions.

### Example Putting It All Together
Here’s a complete example that incorporates all these concepts:

```javascript
const uniqueId = Symbol('id');

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this[uniqueId] = Math.random(); // Unique ID for each user
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getId() {
    return this[uniqueId];
  }

  static createAnonymous() {
    return new User("Anonymous", "User");
  }
}

class Admin extends User {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

// Creating instances
const user1 = new User("John", "Doe");
console.log(user1.getFullName()); // John Doe
console.log(user1.getId()); // Unique ID

const admin1 = new Admin("Jane", "Smith", "Administrator");
console.log(admin1.getFullName()); // Jane Smith
console.log(admin1.getRole()); // Administrator
console.log(admin1.getId()); // Unique ID from User

const anonymousUser = User.createAnonymous();
console.log(anonymousUser.getFullName()); // Anonymous User
console.log(anonymousUser.getId()); // Unique ID
```
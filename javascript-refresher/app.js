const randName = ["Bob", "Bill", "Jill", "Cosmos", "Indie"];
const chooseName = randName[Math.floor(Math.random() * randName.length)];

// playing with arrow functions
const hello = () => {
  console.log(`Hello ${chooseName}`);
};
hello();

// class and construtor es6
class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // Set property to Person class
  constructor() {
    super();
    this.name = "Max";
  }
  // Set methods to Person class
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// newer syntax for class and constructor
class Animal {
  // omit constructor syntax and define class properties immediately
  gender = "male";
  // Use arrow function for methods
  printGender = () => {
    console.log(this.gender);
  };
}

class Dog extends Animal {
  // omit constructor syntax and define class properties immediately
  name = "Midnight";
  gender = "female";
  // Use arrow function for methods
  printDogName = () => {
    console.log(this.name);
  };
}

const pet = new Dog();
pet.printDogName();
pet.printGender();

// Spread Operators
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray);

const oldObject = {
  name: "John",
  age: 23,
  gender: "male",
};

const newObject = {
  ...oldObject,
  // gender in newObject overrides gender in oldObject
  gender: "female",
};

console.log(newObject.gender);

// Rest Operator
const filter = (...args) => {
  return args.filter((el) => el > 0);
};

console.log(filter(1, 2, 3));

// Array Destructing
[a, b] = ["Hello", "Kurdus"];
console.log(a);
console.log(b);

const names = ["Max", "William", "Jason"];
// Skip William
[name1, , name3] = names;
// console.log(name1);
console.log(name3);

//Object Destructing
const user = { name: "Gillian", age: 28 };
const { name, age } = user;
console.log(name);
console.log(age);

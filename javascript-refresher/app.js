const randName = ["Bob", "Bill", "Jill", "Cosmos", "Indie"];
const chooseName = randName[Math.floor(Math.random() * randName.length)];

// playing with arrow functions
const hello = () => {
  console.log(`Hello ${chooseName}`);
};
hello();

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

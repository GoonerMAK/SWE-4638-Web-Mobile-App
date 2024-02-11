// 1. Define a function constructor
function Person(name, age) {
  this.name = name;
  this.age = age;

  // Define methods within the constructor function
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

// Create instances of the Person object
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Call the method
person1.greet(); // Output: Hello, my name is Alice and I'm 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I'm 25 years old.



// 2. Define a constructor function
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Add a method using prototype
Car.prototype.displayInfo = function() {
  console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
};

// Create instances of the Car object
const car1 = new Car('Toyota', 'Camry', 2020);
const car2 = new Car('Honda', 'Accord', 2018);

// Call the method
car1.displayInfo(); // Output: This is a 2020 Toyota Camry.
car2.displayInfo(); // Output: This is a 2018 Honda Accord.

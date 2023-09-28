let dog = {
  name: "Spot",
  numLegs: 4,
  // sayLegs: function () {return `This dog has ${dog.numLegs} legs.`;}
  sayLegs: function () { return `This dog has ${this.numLegs} legs.`; } // using the this keyword is best practice, if the object name was changed all references to dog would need updating, but this overcomes this
};

console.log(`dog.name: ${dog.name}`) // using dot notation to access properities within an object
console.log(`dog.sayLegs: ${dog.sayLegs()}`); // runs method / function within objec

// Constructor - naming convention capitalised name
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
};

// Use constructor to create objects
let terrier = new Dog("Steve", "Black");

console.log(`Dog with parameters: ${terrier.name}`);
console.log(`Was terrier constructed from Dog(): ${terrier instanceof Dog}`); // returns true if it was created via the Dog constructor 

// list out the properties within an object
let ownProps = [];
for (let property in terrier) {
  if (terrier.hasOwnProperty(property)) {
    ownProps.push(property);
  }
};
console.log(`Properties of terrier: ${ownProps.toString()}`);

// Inherit from a supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  }
};

let duck = Object.create(Animal.prototype); // rather than let duck = new Animal() as there are some disadvantages to this
let beagle = Object.create(Animal.prototype);


// Add a method for a child object
// ChildObject.prototype = Object.create(ParentObject.prototype);
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // constructor set to Dog
Dog.prototype.bark = function () {
  console.log("Woof!");
};

let dachshund = new Dog;
dachshund.eat();
dachshund.bark();


// Overwrite an inherited method
function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Overwrite fly() inherited method from Bird
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

let penguin = new Penguin();
console.log(`penguin.fly(): ${penguin.fly()}`);


// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Rabbit() {
  let weight = 15; //private variable

  this.getWeight = function () {
    return weight;
  };
};

let thumper = new Rabbit();
console.log(`Access to private Rabbit() getWeight ${thumper.getWeight()}`);

// Immediately Invoked Function Expression (IIFE) - anonymous function expression that executes right away
// function makeNest() {
//   console.log("A cozy nest is ready");
// }
// makeNest();

(function () {
  console.log("A cozy nest is ready")
})();
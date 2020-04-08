let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//array

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4];
let truths: boolean[] = [true, true, false];

//classes
class Car {}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

//function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

/*type annotation isn't necessary if we declare and initialize variable on the same line
unless we want a developer to know that the type cannot be changed*/
//type inference cannot help when a variable returns a type of 'any'

//when to use annotations
//1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) when we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i of words) {
  if (i === 'green') {
    foundWord = true;
    console.log(foundWord);
  }
}

//3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: number | boolean = false;

for (let i of numbers) {
  if (i > 0) {
    numberAboveZero = i;
  }
}

//if initializing empty array, add annotation
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

//:string[][] = two dimensional array
const carsByMake = [['f150'], ['corolla'], ['camaro']];

const array: string[] = [];

//TS help with inference when extracting values
const firstCar = carMakers[0];
const lastCar = carMakers.pop();

//TS can prevent incompatible values
carMakers.push('honday');
//100

//help with map, reduce, filter
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');

//types arrays are used any time we need to represent a
//collection of records with some arbitrary sort order

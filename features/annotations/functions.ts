const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//never is only used is the function is to never fully finish
const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorMaybe = (message: string): string => {
  if (!message) {
    throw new Error('No message');
  }

  return message;
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: String }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

// ES2015
const logForecast = ({
  date,
  weather,
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);

const add = (a: number, b: number): number => {
  return a + b;
};

add(5, 6);

function substract(a: number, b: number): number {
  return a - b;
}
substract(6, 5);

const logger = (message: string): void => {
  if (!message) {
    throw new Error('No message');
  }
  console.log(message);
  // return 12;
};

logger('Hello World');

const throwError = (): never => {
  throw new Error('Throwing error');
};

throwError();

const forecast = {
  date: new Date(),
  weather: 'Sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

logWeather(forecast);

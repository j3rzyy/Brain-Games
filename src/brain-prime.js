import redlineSync from 'readline-sync';
import {
  repeatsToWin,
  getRandomNum,
  maxValue,
  minValue,
} from '../src/brain-even.js';

const getTrueAnswer = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % 2 === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const brainPrime = () => {
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");
  let i = 0;
  while (i < repeatsToWin) {
    const number = getRandomNum(minValue, maxValue);
    console.log(`Question: ${number}`);
    const trueAnswer = getTrueAnswer(number);
    const userAnswer = redlineSync.question('Your answer: ');
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log('Incorrect!');
      i = 0;
    }
  }
};

import {
  maxValue,
  minValue,
} from '../src/brain-even.js';
import { getRandomNum } from './utils.js';

const getTrueAnswer = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % 2 === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export const rule = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

export const brainPrime = () => {
  const question = getRandomNum(minValue, maxValue);
  const trueAnswer = getTrueAnswer(question);
  return { question, trueAnswer };
};

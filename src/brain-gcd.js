import {
  maxValue,
  minValue,
} from '../src/brain-even.js';
import { getRandomNum } from './utils.js';

const getTrueAnswer = (firstVal, secondVal) => { // функция находит НОД двух чисел
  while (firstVal && secondVal) {
    firstVal > secondVal ? firstVal %= secondVal : secondVal %= firstVal;
  }
  firstVal += secondVal;
  return firstVal;
};

export const rule = 'Find the greatest common divisor of given numbers.';

export const brainGCD = () => {
  const firstValue = getRandomNum(minValue, maxValue); // получение первого числа через функцию
  const secondValue = getRandomNum(minValue, maxValue); // получение второго числа для НОД
  const question = (`${firstValue} ${secondValue}`);
  const trueAnswer = getTrueAnswer(firstValue, secondValue);
  return { question, trueAnswer };
};

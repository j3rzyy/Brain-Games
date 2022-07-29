import redlineSync from 'readline-sync';
import {
  repeatsToWin,
  getRandomNum,
  maxValue,
  minValue,
} from '../src/brain-even.js';

const getTrueAnswer = (firstVal, secondVal) => { // функция находит НОД двух чисел
  if (secondVal > firstVal) return getTrueAnswer(secondVal, firstVal);
  if (!secondVal) return firstVal;
  return getTrueAnswer(secondVal, firstVal % secondVal);
};

export const getGCD = () => {
  let i = 0;
  while (i < repeatsToWin) {
    console.log('Find the greatest common divisor of given numbers.');
    const firstValue = getRandomNum(minValue, maxValue); // получение первого числа через функцию
    const secondValue = getRandomNum(minValue, maxValue); // получение второго числа для НОД
    console.log(`Question: ${firstValue} ${secondValue}`); // вывод в терминал чисел для нахождения НОД
    const trueAnswer = getTrueAnswer(firstValue, secondValue);
    const userAnswer = redlineSync.question('Your answer: ');
    if (Number(userAnswer) === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log('Incorrect!');
      i = 0;
    }
  }
};

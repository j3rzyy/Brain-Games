import redlineSync from 'readline-sync';
import {
  repeatsToWin,
  getRandomNum,
  maxValue,
  minValue,
} from '../src/brain-even.js';

const getTrueAnswer = (firstVal, secondVal) => { // функция находит НОД двух чисел
  while (firstVal && secondVal) {
    firstVal > secondVal ? firstVal %= secondVal : secondVal %= firstVal;
  }
  firstVal += secondVal;
  return firstVal;
};

export const getGCD = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < repeatsToWin) {
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

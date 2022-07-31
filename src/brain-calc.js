import redlineSync from 'readline-sync';
import {
  repeatsToWin,
  getRandomNum,
  maxValue,
  minValue,
} from '../src/brain-even.js';

const getRandomSign = () => {
  const totalSign = 4; // каждая цифра соответсвует мат.действию (+, -, *, %)
  const possibleActions = ['+', '-', '*', '%'];
  return possibleActions[getRandomNum(0, totalSign)];
};

export const brainCalc = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < repeatsToWin) {
    const firstMember = getRandomNum(minValue, maxValue); // первый член выражения
    const secondMember = getRandomNum(minValue, maxValue); // второй член выражения
    const randomSign = getRandomSign(); // случайное мат. действие (+, -, *, %)
    console.log(`${firstMember} ${randomSign} ${secondMember}`);
    const trueAnswer = eval(`${firstMember} ${randomSign} ${secondMember}`); // Метод eval() выполняет JavaScript-код, представленный строкой
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

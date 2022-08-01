import {
  maxValue,
  minValue,
} from '../src/brain-even.js';
import { getRandomNum } from './utils.js';

const getRandomSign = () => {
  const totalSign = 4; // каждая цифра соответсвует мат.действию (+, -, *, %)
  const possibleActions = ['+', '-', '*', '%'];
  return possibleActions[getRandomNum(0, totalSign)];
};

export const rule = 'What is the result of the expression?';

export const brainCalc = () => {
  const firstMember = getRandomNum(minValue, maxValue); // первый член выражения
  const secondMember = getRandomNum(minValue, maxValue); // второй член выражения
  const randomSign = getRandomSign(); // случайное мат. действие (+, -, *, %)
  const question = (`${firstMember} ${randomSign} ${secondMember}`);
  const trueAnswer = eval(`${firstMember} ${randomSign} ${secondMember}`);
  // Метод eval() выполняет JavaScript-код, представленный строкой
  return { question, trueAnswer };
};

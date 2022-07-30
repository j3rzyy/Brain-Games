import redlineSync from 'readline-sync';
import {
  repeatsToWin,
  getRandomNum,
  maxValue,
  minValue,
} from '../src/brain-even.js';

const getTrueAnswer = (firstMember, secondMember) => {
  const totalSign = 4; // каждая цифра соответсвует мат.действию (+, -, *, %)
  // const possibleActions = ['+', '-', '*', '%']
  switch (getRandomNum(0, totalSign)) {
    case 0:
      console.log(`Question: ${firstMember} + ${secondMember}`);
      return firstMember + secondMember;
    case 1:
      console.log(`Question: ${firstMember} - ${secondMember}`);
      return firstMember - secondMember;
    case 2:
      console.log(`Question: ${firstMember} * ${secondMember}`);
      return firstMember * secondMember;
    case 3:
      console.log(`Question: ${firstMember} % ${secondMember}`);
      return firstMember % secondMember;
    default:
      return 0;
  }
};

export const brainCalc = () => {
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < repeatsToWin) {
    const firstMember = getRandomNum(minValue, maxValue); // первый член выражения
    const secondMember = getRandomNum(minValue, maxValue); // второй член выражения
    const trueAnswer = getTrueAnswer(firstMember, secondMember);
    const userAnswer = redlineSync.question('Your answer: ');
    if (Number(userAnswer) === trueAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log('Incorrect!');
      console.log(`True is ${trueAnswer}`);
      i = 0;
    }
  }
};

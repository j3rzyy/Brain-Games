import redlineSync from 'readline-sync';
import { repeatsToWin } from '../src/brain-even.js';
import { getRandomNum } from '../src/brain-even.js';
S
const getTrueAnswer = (firstMember, secondMember) => {
  const totalSign = 4;
  switch (getRandomNum(totalSign)) {
    case 0:
      console.log(`Question: ${firstMember} + ${secondMember}`);
      return firstMember + secondMember;
    case 1:
      console.log(`Question: ${firstMember} - ${secondMember}`);
      return firstMember - secondMember;
    case 2:
      console.log(`Question: ${firstMember} * ${secondMember}`);
      return firstMember + secondMember;
    case 3:
      console.log(`Question: ${firstMember} % ${secondMember}`);
      return firstMember % secondMember;
    default:
      return 0;
  }
};

export const brainCalc = () => {
  console.log('What is the result of the expression?');
  const maxValue = 10; // максимально возможное псч
  for (let i = 0; i < repeatsToWin;) {
    const firstMember = getRandomNum(maxValue); // первый член выражения
    const secondMember = getRandomNum(maxValue); // второй член выражения
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

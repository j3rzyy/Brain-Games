import redlineSync from 'readline-sync';
import {
  repeatsToWin,
  maxValue,
  minValue,
} from '../src/brain-even.js';
import { getRandomNum } from './utils.js';

const getProgress = () => {
  const progress = [];
  progress[0] = getRandomNum(minValue, maxValue); // первый случайный член прогрессии
  const progressStep = getRandomNum(1, 10); // случайный шаг прогресии
  const lengthOfProgress = 8; // длина прогресии задается строго
  for (let i = 1; i < lengthOfProgress; i += 1) { // генерация прогрессии с учетом данных выше
    progress[i] = progress[i - 1] + progressStep;
  }
  return progress;
};

export const brainProgress = () => {
  console.log('What number is missing in this progression?');
  let i = 0;
  while (i < repeatsToWin) {
    const progress = getProgress();
    const randomMember = getRandomNum(0, progress.length); // выбор случайного члена прогрессии
    const trueAnswer = progress[randomMember];
    progress[randomMember] = '..';
    console.log(`Question: ${progress.toString().split(',').join(' ')}`);
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

import redlineSync from 'readline-sync';
import {
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

export const rule = 'What number is missing in this progression?';

export const brainProgress = () => {
  const progress = getProgress();
  const randomMember = getRandomNum(0, progress.length); // выбор случайного члена прогрессии
  const trueAnswer = progress[randomMember];
  progress[randomMember] = '..';
  const question = progress.toString().split(',').join(' ');
  return { question, trueAnswer };
};

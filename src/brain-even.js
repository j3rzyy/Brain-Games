import { getRandomNum } from './utils.js';

export const maxValue = 100; // ограничение значения максимально возможного рандомного числа
export const minValue = 0;

const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
}; // функция проверки на четность, возвращает true = 'yes', false = 'no'

export const rule = "Answer 'yes' if number even otherwise answer 'no'.";

export const brainEven = () => {
  const question = getRandomNum(minValue, maxValue);
  const trueAnswer = isEven(question);
  return { question, trueAnswer };
};

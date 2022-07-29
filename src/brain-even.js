import redlineSync from 'readline-sync';

export const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const repeatsToWin = 2; // колличество повторов до победы
export const maxValue = 100;
export const minValue = 0;

const isEven = (number) => {
  if (number % 2 === 0)
    return 'yes'
  return 'no';
}; // функция проверки на четность, возвращает true = 'yes', false = 'no'

export const brainEven = () => {
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  const maxValue = 100; // ограничение значения максимально возможного рандомного числа
  let i = 0;
  while (i < repeatsToWin) {
    const randomNum = getRandomNum(minValue, maxValue); // получение рандомного числа
    console.log(`Question: ${randomNum}`); // вывод рандомного числа тип которого необходимо определить
    // const userAnswer = redlineSync.question('Your answer: ')
    // запрос ответа от пользователя БЕЗ проверки ввода
    let userAnswer = '';
    do {
      userAnswer = redlineSync.question('Your answer: ');
    } while (userAnswer !== 'yes' && userAnswer !== 'no'); // запрос ответа от пользователя C проверкой ввода
    if (userAnswer === isEven(randomNum)) { // проверка соответствия пользовательского и верного отв
      console.log('Correct!');
      i += 1;
    } else {
      console.log('Incorrect!');
      i = 0;
    }
  }
};

import redlineSync from 'readline-sync';

export const getRandomNum = (max) => Math.floor(Math.random() * max); // генератор случайных чисел
export const repeatsToWin = 2; // колличество повторов до победы

const isEven = (number) => {
  if (number % 2 === 0)
    return 'yes'
  return 'no';
}; // функция проверки на четность, возвращает true = 'yes', false = 'no'

export const brainEven = () => {
  console.log("Answer 'yes' if number even otherwise answer 'no'.");
  const maxValue = 100; // ограничение значения максимально возможного рандомного числа
  for (let i = 0; i < repeatsToWin;) {
    const randomNum = getRandomNum(maxValue); // получение рандомного числа (с огрничением maxValue)
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

import redlineSync from 'readline-sync';


export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};


const getRandomNum = (max) => Math.floor(Math.random() * max); // генератор случайных чисел
const repeatsToWin = 2; // колличество повторов до победы


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
    if (userAnswer === isEven(randomNum)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log('Incorrect!');
      i = 0;
    }
  }
};

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

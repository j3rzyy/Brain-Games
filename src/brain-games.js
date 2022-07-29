import redlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  const userName = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

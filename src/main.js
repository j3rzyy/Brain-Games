import redlineSync from 'readline-sync';

export const startGame = (rule, runGame) => {
  console.log(rule);
  const repeatsToWin = 2;
  let currentRep = 0;
  while (currentRep < repeatsToWin) {
    const game = runGame();
    console.log(`Question: ${game.question}`);
    const userAnswer = redlineSync.question('Your answer: ');
    if (userAnswer === String(game.trueAnswer)) {
      console.log('Correct!');
      currentRep += 1;
    } else {
      console.log('Incorrect!');
      currentRep = 0;
    }
  }
};

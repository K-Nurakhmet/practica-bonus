'use strict';

const isNumber = (num) => {
  return Number.isNaN(num) && Number.isFinite(num)
}

const playGameRandom = () => {
  const minNumber = +prompt('Введите минимальный число', '');
  const maxNumber = +prompt('ВВедите максимальный число', '');
  const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  console.log('Загаданное число:', randomNumber);

  let attemptGame = Math.round((maxNumber - minNumber) * 0.3);
  console.log('Попитка в игре', attemptGame);
  const storeNumber = [];

  if (minNumber >= 50 && maxNumber <= 100) {
    attemptGame = 15;
  }


  if (isNumber(minNumber) || isNumber(maxNumber) || minNumber === 0 || maxNumber === 0 || minNumber > maxNumber) {
    console.log('Введите число! Введите число от 1 до 100');
  }

  for (let i = 0; i < attemptGame; i++) {
    let userNumber = +prompt(`Угадай число. У вас осталось ${attemptGame - i} попыток`)

    if (isNaN(userNumber)) {
      console.log('Введите число!');
      i--;
    } else if (storeNumber.includes(userNumber)) {
      console.log('Это число вы уже вводили');
      --i;
    }

    if (userNumber > randomNumber) {
      console.log('Больше! Попробуйте ещё раз.');
      storeNumber.push(userNumber);
    } else if (userNumber < randomNumber) {
      console.log('Меньше! Попробуйте ещё раз.');
      storeNumber.push(userNumber);
    } else if (userNumber === randomNumber) {
      console.log('Поздравляем, вы угадали число!');
      return;
    }

  }
  console.log('К сожалению, вы не угадали число. Игра окончена.');
}
playGameRandom()
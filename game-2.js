'use strict';

const randomGame = () => {
  const minNumber = +prompt('Введите минимальный число, от 1 до 100', '');
  const maxNumber = +prompt('Введите максималный число, от 1 до 100', '');
  if (Number.isNaN(minNumber) || Number.isNaN(maxNumber) || minNumber === 0 || maxNumber === 0 || minNumber > maxNumber) {
    alert('Введите число от 1 до 100');
    return randomGame();
  };

  const randomNumber = Math.round(Math.random() * (maxNumber - minNumber + 1) + minNumber);
  console.log('Загаданное число:', randomNumber);

  const attemptGame = Math.round((maxNumber - minNumber) * 0.3);
  console.log('Попитка в игре', attemptGame);
  const arrayNumber = [];
  console.log('arrayNumber: ', arrayNumber);
  let countNumber = 0;



  while (countNumber < attemptGame) {
    let userNumber = +prompt(`Угадай число. От ${minNumber} до ${maxNumber}. У вас осталось ${attemptGame - countNumber} попыток`)

    if (Number.isNaN(userNumber)) {
      console.log('Введите число!');
      countNumber++;
      continue;
    } else if (arrayNumber.includes(userNumber)) {
      console.log('Это число вы уже вводили');
      continue;
    };

    switch (true) {
      case userNumber > randomNumber:
        console.log('Больше! Попробуйте ещё раз.');
        arrayNumber.push(userNumber);
        countNumber++;
        break;
      case userNumber < randomNumber:
        console.log('Меньше! Попробуйте ещё раз.');
        arrayNumber.push(userNumber);
        countNumber++;
        break;
      case userNumber === randomNumber:
        console.log('Правильно! Вы угадали');
        return
    }
  }

  if (arrayNumber.length === attemptGame) {
    console.log('К сожалению, вы не угадали число. Игра окончена.');
    return
  }

}

randomGame();

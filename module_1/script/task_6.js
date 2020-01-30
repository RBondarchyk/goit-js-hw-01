let input;
let total = 0;
while (true) {
  input = prompt('Введите число:');

  if (input === null) {
    console.log('Отменено пользователем.');
    break;
  }

  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    console.log('Было введено не число, пропускаем текущую итерацию');
    continue;
  }

  total += input;
}
console.log('Общая сумма: ' + total);

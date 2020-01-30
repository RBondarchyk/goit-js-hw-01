const credits = 23580;
console.log('На счету : ' + credits + ' кредитов.');
const pricePerDroid = 3000;
console.log(
  'Стоимость ремонтного дроида, составляет : ' +
    pricePerDroid +
    ' кредитов, за шт.',
);
let addToCart = prompt('Введите количество дроидов для покупки');
if (addToCart === null) {
  alert('Отменено пользователем!');
} else {
  addToCart = Number(addToCart);
  console.log(typeof addToCart);
  console.log(typeof addToCart);
  let totalPrice = addToCart * pricePerDroid;
  let comparison;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else if ((comparison = credits - addToCart * pricePerDroid)) {
    alert(
      'Заказано ' +
        addToCart +
        ' шт, на сумму: ' +
        totalPrice +
        ' кредитов . ' +
        'Остаток на счету: ' +
        comparison +
        ' кредитов.',
    );
  }
}

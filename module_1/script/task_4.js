const credits = 23580;
console.log('На счету : ' + credits + ' кредитов.');
const pricePerDroid = 3000;
console.log('Стоимость ремонтного дроида, составляет : ' + pricePerDroid + ' кредитов, за шт.');
let addToCart = prompt('Введите количество дроидов для покупки');
if (addToCart === null) {
    alert('Отменено пользователем!');
}
console.log(typeof addToCart);
addToCart = Number(addToCart);
console.log(typeof addToCart);
let totalPrice = addToCart * pricePerDroid;
let comparison = credits - addToCart * pricePerDroid;
if(totalPrice > credits) {
    alert('Недостаточно средств на счету!');
} else if(totalPrice <= credits) {
    alert('Заказано ' + addToCart + ' шт, на сумму: ' + totalPrice + ' кредитов . ' + 
'Остаток на счету: ' + comparison + ' кредитов.');
};
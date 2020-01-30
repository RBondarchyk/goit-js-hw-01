const total = 150;
console.log('Количество товара на складе: ' + total);
const ordered = 50;
console.log('Количество товара в корзине: ' + ordered);
if (total < ordered) {
  alert('На складе недостаточно тoваров!');
} else {
  alert('Заказ оформлен, с вами свяжется менеджер');
}

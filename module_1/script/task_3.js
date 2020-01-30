const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const adminInput = prompt('Введите пароль');
console.log(adminInput);
if (adminInput === null) {
  alert('Отменено пользователем!');
}
const normalizeAdminInput = adminInput.toLowerCase();
console.log(normalizeAdminInput);
message = ADMIN_PASSWORD === normalizeAdminInput;
console.log(message);
if (message === true) {
  alert('Добро пожаловать!');
} else {
  alert('Доступ запрещен, неверный пароль!');
}

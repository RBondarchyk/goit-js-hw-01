
const countryChoice = prompt('Укажите в какую страну оформить доставку:');
let price;
if (countryChoice === null) {
    alert('Отменено пользователем!')
}
const normalizeCountryChoice = countryChoice.toLowerCase();
switch(normalizeCountryChoice) {
    case 'китай': {
        let price = 100;
        alert('Доставка в ' + normalizeCountryChoice + ' будет стоить: ' + price + ' кредитов. ')
        break;
    }
    case 'чили': {
        price = 250;
        alert('Доставка в ' + normalizeCountryChoice + ' будет стоить: ' + price + ' кредитов. ')
        break;
    }
    case 'австрия': {
        price = 170;
        alert('Доставка в ' + normalizeCountryChoice + ' будет стоить: ' + price + ' кредитов. ')
        break;
    }
    case 'индия': {
        price = 80;
        alert('Доставка в ' + normalizeCountryChoice + ' будет стоить: ' + price + ' кредитов. ')
        break;
    }
    case 'ямайка': {
        price = 120;
        alert('Доставка в ' + normalizeCountryChoice + ' будет стоить: ' + price + ' кредитов. ')
        break;
    }
    default:
        normalizeCountryChoice = alert('В вашей стране доставка не доступна')
}
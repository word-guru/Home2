alert('ЗАДАНИЕ №6');
const EUR = 0.93;
const RUB = 62.05;
const AZN = 1.7;
let summa;
let USD = +prompt('Введите кол-во долларов');
let currency = prompt('Введите волюту(RUB, EUR, AZN):', 'RUB');

    switch (currency)
    {
           case 'RUB':
               summa = RUB * USD;
                alert(USD + ' USD = ' + summa + ' RUB');
                break;
            case 'EUR':
                summa = EUR * USD;
                alert(USD + ' USD = ' + summa + ' EUR');
                break;
            case 'AZN':
                summa = AZN * USD;
                alert(USD + ' USD = ' + summa + ' AZN');
                break;
            default:
                alert('Нет такой валюты');
        }
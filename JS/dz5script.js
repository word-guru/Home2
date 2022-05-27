alert('ЗАДАНИЕ №5');
let numUser = prompt('Введите 5-ти значное число');

    let num1 = parseInt(numUser/10000,10);
let num2 = parseInt(numUser / 1000,10) % 10;
let num4 = parseInt(numUser / 10,10) % 10;
let num5 = numUser % 10;

    ((num1 == num5) && (num2 == num4)) ? alert('Число ' + numUser + ' ПАЛИДРОМ')
                                       : alert('Число ' + numUser + ' НЕ ЯВЛЯЕТСЯ ПАЛИДРОМ');
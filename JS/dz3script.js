alert('ЗАДАНИЕ №3');
let numUser = +prompt('Введите 3-х зеачное число');
let num1;
let num2;
let num3;
let temp = numUser;

num1 = temp % 10;
temp = parseInt(temp/10,10);
num2 = temp % 10;
temp = parseInt(temp/10,10);
num3 = temp;

((num1 != num2)&&(num1 != num3)&&(num2 != num3)) ? alert('В числе '+numUser +' все цифры разные')
    :alert('В числе '+numUser + ' есть одинаковые цифры');
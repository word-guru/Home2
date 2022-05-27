alert('ЗАДАНИЕ №8');
const PI = 3.14;
let circLength = +prompt('Введите длинну окружности');
let perSquare = +prompt('Введите периметр квадрата');
let diameterCircle = circLength / PI;
let sideSquare = perSquare / 4;

    (diameterCircle <= sideSquare) ? alert('ПОМЕСТИТСЯ') : alert('НЕ ПОМЕСТИТСЯ');
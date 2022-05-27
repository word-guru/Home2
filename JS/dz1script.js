alert('ЗАДАНИЕ №1');
let age= +prompt('Введите свой возраст');
if(age >= 0 && age <= 2)
{
alert('Вы ребенок');
}else if(age > 11 && age < 19)
{
    alert('Вы подросток');
}else if(age > 18 && age < 61)
{
    alert('Вы взрослый');
}else if(age > 60)
{
    alert('Вы пенсионер');
}else
{
    alert('Вы ребенок или подросток');
}
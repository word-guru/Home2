alert('ЗАДАНИЕ №4');
let year = +prompt('Введите год');

if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
{
    alert('Год високостный');
}else
{
    alert('Год невисокостный');
}
alert('ЗАДАНИЕ №7');
let summUser = +prompt('Введите сумму оплаты');
let onePercent = summUser/100;
let res;

    if(summUser >= 200 && summUser <= 300)
    {
        res = summUser - onePercent * 3;
    alert('К оплате: ' + res + ' руб.');

    }else if(summUser > 300 && summUser <= 500)
    {
        res = summUser - onePercent * 5;
    alert('К оплате: ' + res + ' руб.');

    }else if(summUser > 500)
    {
        res = summUser - onePercent * 7;
    alert('К оплате: ' + res + ' руб.');

    }else
{
    alert('К оплате: ' + summUser + ' руб.');
}
alert('ЗАДАНИЕ №9');
let count;
let choice;
alert('Сколько дней в декабре?');
choice = prompt('a) 28\n b) 30\n c) 31', 'a');

    (choice == 'c') ? count = 2 : count = 0;
    alert('Сколько будет 2 + 7 = ?');
choice = prompt('a) 12\n b) 9\n c) 12', 'a');

    (choice == 'b') ? count += 2 : count;

    alert('Какой год високосный?');
choice = prompt('a) 2020\n b) 2021\n c) 2022', 'a');

    (choice == 'a') ? count += 2 : count;

    alert('Поздравляем вы набрали ' + count + ' баллов');
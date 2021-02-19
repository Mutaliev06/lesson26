// Задание 1
let a = ['lorem', 123, true, 'ipsum'];
console.log(a.length);

//Задание 2
console.log(a[0], a[a.length-1]);

//Задание 3
let em = [];
em.unshift('Новый элемент 2');
em.push('Новый элемент 3');
em.push('Новый элемент 4');
em.unshift('Новый элемент 1');
em.push('Новый элемент 5');

//Задание 4
for (let i = 0; i < 5; i++) {
    console.log(em[i]);
}

//Задание 5
for (let i = 0; i < 3; i++) {
    em.unshift(`Задание 5_${i}`);
}

//Задание 6
em.shift();
em.pop();
em.pop();

//Задание 7
let number = [1, 3, 5, 7, 9];
for (let num = 0; num < 5; num++) {
    console.log(number[num] = number[num] + 1);
}


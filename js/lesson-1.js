// Завдання 1:
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'. 

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою  
// перетворіть значення на число за допомогою Number().

// const number = Number(prompt('Enter number'));

// 1
// if(number === 10){
//     alert('Вірно');
// }
// else{
//     alert('Невірно');
// }

// 2
// number === 10 ? alert('Вірно') : alert('Невірно');

// 3
// alert(number === 10 ? 'Вірно' : 'Невірно');

// Завдання 2:
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

// if (min <= 15 ){
//     alert(`${min} входить в першу чверть`);
// }
// else if(min <= 30){
//     alert(`${min} входить в другу чверть`);
// }
// else if(min <= 45){
//     alert(`${min} входить в третю чверть`);
// }
// else{
//     alert(`${min} входить в четверту чверть`);
// }

// Завдання 3:
// Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.

// const num = Number(prompt('Enter number'));

// switch(num){
//     case "1":
//         result = "зима";
//     break;
//     case "2":
//         result = "весна";
//     break;
//     case "3":
//         result = "літо";
//     break;
//     case "4":
//         result = "осінь";
//     break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
// }

// Завдання 6:
// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let count = 0;

// while (count <= 20) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// Завдання 9:
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).

// const checkage = confirm('Ви повнолітній?') 

// 1
// function isAdult(age) {
//     if (age >= 18){
//         return true;
//     } else{
//         const checkAge = confirm('Ви повнолітній?');
//         return checkAge;
//     }
// }

// 2
// function isAdult(age) {
//     if (age >= 18){
//         return true;
//     } 
//     return confirm('Ви повнолітній?');
// }

// 3
// function isAdult(age) {
//     return age >= 18 ? true : confirm('Ви повнолітній?');
// }

// 4
// function isAdult(age) {
//     return age >= 18 || confirm('Ви повнолітній?');
// }

// console.log (isAdult(16));

// Завдання 8:
// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

//1
// function min(a, b){
//     if(typeof a !== 'nuber' || typeof b !== 'nuber') {
//         return 'Not a number!';
//     }
//    return a < b ? a: b;
// }

//2
// function min(a, b){
//     return Math.min(a, b) || 'Not a number!';
// }

//3
// function min(a, b){
//     if(typeof a !== 'nuber' || typeof b !== 'nuber') {
//         return 'Not a number!';
//     }
//     return Math.min(a, b);
// }

// console.log (min(2, 5));
// console.log (min("5", 2));
// console.log (min("fa", 5));


//Завдання 7:
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри - 
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

// function getNumbers(min, max){
//     let simEven = 0
//     for (let i = max; i >= min; i--){
//         console.log(i);
//         if (i % 2 === 0){
//             simEven += i;
//         }
//     }
//     return simEven;
// }

// const result = getNumbers(1, 10);
// console.log("Сума парних чисел:", result);

// Завдання 10:
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.

// function fizzBuzz(num){
//     for (let i = 1; i <= num; i++){
//         if (i % 3 === 0 && i % 5 === 0){
//             console.log (fizzbuzz);
//         }
//         else if (i % 3 === 0){
//             console.log (fizz);
//         }
//         else if(i % 5 === 0){
//             console.log (buzz);
//         }
//     }
// }


// console.log (fizzBuzz(10));
// console.log (fizzBuzz(9));
// console.log (fizzBuzz(30));

// Завдання 4:
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const totalMinutes = prompt('Введіть кількість хвилин');

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// const formattedHours = String(hours).padStart(2, '0');
// const formattedMinutes = String(minutes).padStart(2, '0');

// console.log(`${formattedHours}:${formattedMinutes}`);

//Number.isNaN(value) строга перевірка на номери.
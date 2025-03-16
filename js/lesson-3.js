//                  Завдання 1:
// const numbers = [[1, 2, 3, 4, 5]]

// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

//                   Завдання 2:
// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];
// const result = data.flatMap(item => item.values);
// console.log(result);

//                  Завдання 3:
// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// const personAge = people.some(person => person.age < 20);
// console.log(personAge);

//                   Завдання 4:
// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];
// const all = numbers.every(num => num % 2 === 0);
// console.log(all);

//                  Завдання 5:
// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];
// const first = numbers.find(num => num % 2 !== 0);
// console.log(first);

//                  Завдання 6:
// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// console.log (numbersArray.toSorted((a, b) => a - b))

//                   Завдання 7:
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// console.log (stringArray.toSorted())

//                   Завдання 8:
//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];
// console.log (users.toSorted((a, b) => a.age - b.age))

//                   Завдання 9:
// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]
// const filtred = user.filter(user => user.age > 20);
// console.log(filtred);

//                   Завдання 10:
// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((x, y) => x + y, 0);
// console.log(sum);

//                   Завдання 11:
// Створи клас для калькулятора, який має такі методи:
// - метод number, який набуває початкового значення для наступних операцій
// - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
// - методи add, substruct, divide, multiply
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//     constructor() {
//       this.result = 0;
//     }
//     number(value) {
//       this.result = value;
//       return this;
//     }
//     getResult() {
//       return this.result;
//     }
//     add(value) {
//       this.result += value;
//       return this;
//     }
//     substract(value) {
//       this.result -= value;
//       return this;
//     }
//     divide(value) {
//       if (value === 0) {
//         console.error("Kann nicht durch 0 geteilt werden!");
//         return this;
//       }
//       this.result /= value;
//       return this;
//     }
//     multiply(value) {
//       this.result *= value;
//       return this;
//     }
// }  
// const calcul = new Calculator();
// const result = calcul.number(2).add(15).multiply(3).substract(4).divide(2).getResult();
// console.log(result);

//                   Завдання 11:
//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.
  
// ##### Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю 
//та електронною поштою людини.
  
// 
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
//  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.

// class Person {
//     constructor(name, age, gender, email) {
//       this.name = name;
//       this.age = age;
//       this.gender = gender;
//       this.email = email;
//     }
//     getDetails() {
//       return {
//         name: this.name,
//         age: this.age,
//         gender: this.gender,
//         email: this.email
//       };
//     }
// }

// class Employee extends Person {
//     constructor(name, age, gender, email, salary, department) {
//       super(name, age, gender, email);
//       this.salary = salary;
//       this.department = department;
//     }
//     getEmployeeDetails() {
//       return {
//         salary: this.salary,
//         department: this.department
//       };
//     }
// }
  
// const person1 = new Person('Luka', 20, 'herr', 'Luka11@email.com');
// console.log(person1.getDetails());
// const employee1 = new Employee('Katia', 38, 'frau', 'Katia2000@email.com', 70000, 'Bankkauffrau');
// console.log(employee1.getDetails());
// console.log(employee1.getEmployeeDetails()); 
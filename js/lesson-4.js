//                   Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
// const bodyEl = document.querySelector("body");
// console.log(bodyEl);
// 2 - отримай елемент id="title" і виведи його в консоль;
// const titleId = document.querySelector('#title');
// console.log(titleId);
// 3 - отримай елемент class="list" і виведи його в консоль;
// const listClass = document.querySelector('.list');
// console.log(listClass);
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const elementsDataTopic = document.querySelectorAll('li[data-topic]');
//   console.log(elementsDataTopic);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstElementData = elementsDataTopic[0];
// console.log(firstElementData);
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const endElementData = elementsDataTopic[3];
// console.log(endElementData);
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const mainTitle = document.querySelector("h1");
// const sibling = mainTitle.nextElementSibling;
// console.log(sibling);
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const titles = document.querySelectorAll("h3");
// titles.forEach(title=>console.log(titles));
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const hElements = document.querySelectorAll('h3');
// hElements.forEach(element => {
//     element.classList.add('active');
// });
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const liElement = document.querySelector('li[data-topic="navigation"]');
// console.log(liElement);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// liElement.style.backgroundColor = 'yellow';
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const pElement = liElement.querySelector('p');
// pElement.textContent = "Я змінив тут текст!"
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation"; 
// const topicElement = document.querySelector(`[data-topic=${currentTopic}]`); 
// console.log(topicElement);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// topicElement.style.backgroundColor = 'blue';
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedElement = document.querySelector('.completed');
// console.log(completedElement);
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// if (completedElement) {
//     const parentLi = completedElement.closest('li');
//     parentLi.remove();
// };
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// const newText = document.createElement('p');
// newText.textContent = "Об'єктна модель документа (Document Object Model)";
// mainTitle.after(newText);

// const markup = "<p>Об'єктна модель документа (Document Object Model)</p>";
// mainTitle.insertAdjacentHTML('afterend', markup);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newItem = document.createElement("li");
// const newTitile = document.createElement("h3");
// const newDescription = document.createElement("p");
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// const markup = "<h3>Властивість innerHTML</h3> <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу. тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку</p>";
// mainTitle.insertAdjacentHTML('beforeend', markup);
// // 20 - очисти список
// list.innerHTML();


//                   Завдання 2:

// Створіть контейнер div (з класом numberContainer )в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const boxWrapper = document.querySelector('.numberContainer');

// const boxes = [];
// for(let i = 1; i <=100;i++ ){
//     const box = document.createElement("div");
//     box.classList.add('number');
//     box.textContent = randomNumber();
//     boxes.push(box);

//     if(box.textContent % 2===0){
//         box.classList.add("event");
//     }else {
//         box.classList.add("odd");
//     }
// }
// boxWrapper.append(...boxes);

//                   Завдання 3:

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
// const userNameInput = document.querySelector(".js-username-input");

// userNameInput.addEventListener('input', () => {
//     const inputLength = userNameInput.value.length;
//     if (inputLength > 6) {
//       userNameInput.classList.add('success');
//       userNameInput.classList.remove('error');
//     } else {
//       userNameInput.classList.add('error');
//       userNameInput.classList.remove('success');
//     }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// userNameInput.addEventListener('focus', () => {
//   if (userNameInput.value.trim() === '') {
//     userNameInput.style.outline = '3px solid red';
//   } else {
//     userNameInput.style.outline = '3px solid green';
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// userNameInput.addEventListener('blur', () => {
//   if (userNameInput.value.trim() === '') {
//     userNameInput.style.outline = '3px solid red';
//   } else {
//    userNameInput.style.outline = '3px solid green';
//   }
// });

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видали, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.

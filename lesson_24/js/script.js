"use strict";
// оголошення змінної
let userAge = 56;
console.log(typeof userAge);

console.log(userAge);

//Зміна значення
// let userAge = 55;
// console.log(userAge);
// userAge = 15;
// console.log(userAge);
// userAge = "Таня";
// console.log(userAge);
// console.log("Мене звати:" + userAge + "!");

//Копіювання значення

// let userAge = 56;
// console.log(userAge);
// let otherUserAge;
// console.log(otherUserAge);
// otherUserAge = userAge;
// console.log(otherUserAge);

//Область видимості
// console.log(userAge);//помилка
// let userAge = 56;

// let userAge = 56;
// function someFunction() {
//   let userAge = 33;
//   console.log(userAge);
//   if (userAge > 10) {
//     let userAge = 10;
//     console.log(userAge);
//   }
// }
// someFunction();
// console.log(userAge);

// let userName = "Tom";
// console.log(userName);

// console.log("I am" + " " + userName + "!");
// let otherName;
// otherName = userName;
// console.log("I am" + " " + otherName + "!");

// // console.log(secondName);// error
// // let secondName = "Ruslan";

// const mainName = "Тетяна";
// console.log(mainName);

// const COLOR_RED = "red";
// console.log(COLOR_RED);

// //Типи даних

// //undefined
// let otherUserAge;
// console.log(typeof otherUserAge);
// console.log(otherUserAge);
// if (typeof otherUserAge === "undefined") {
//   console.log("Не сидимо, працюємо далі..");
//}

// //Number
// //Nul
// let secondName = null;
// console.log(typeof secondName);
// console.log(secondName);

// //Infinity
// let result = 10 / 0;
// console.log(typeof result);
// console.log(result);

// //NaN
// let otherResult = "I" * 10;
// console.log(typeof otherResult);
// console.log(otherResult);
// let secondResult = "Жека" * 10;
// console.log(typeof secondResult); // Тип даних
// console.log(secondResult); // Значення

// let userAge = 56;
// console.log(typeof userAge);
// console.log(userAge);

//РЯДОК
// let myAge = 56;
// let myName = "Тетяна";
// console.log(typeof myAge);
// console.log(myAge);
// console.log(typeof myName);
// console.log(myName);

//Зворотні рядки
// let myAge = 56;
// let myName = "Тетяна";
// console.log(`Моє ім'я: ${myName}, мені ${myAge} років`);
// myAge = String(myAge);
// console.log(typeof myAge);
// console.log(myAge);

//booling
// let someVar = "";
// console.log(someVar);
// console.log(typeof Boolean(someVar));
// console.log(Boolean(someVar));
// if (someVar) {
//   console.log("Працюємо..");
// }

//Основні методи рядків
// Length
//Рядок це масив
// let someString = "Я навчаюся на курсi верстки!";
// console.log(someString.length);
// console.log(someString[20]);
// console.log(someString[5]);
//Регістр toUpperCase(), toLowerCase

// console.log(someString.toUpperCase());
// console.log(someString.toLowerCase());

// Пошук - методы includes, startsWith, endsWith
// let someString = "Я самостійно  вивчаю англійську мову!";
// console.log(someString.includes("чаю"));
// console.log(someString.startsWith("Я"));
// console.log(someString.endsWith("!"));

//slice отримання частини рядка
// let someNewString = someString.slice(4, 9);
// console.log(someNewString);

//riplace пошук та заміна (що на що)
// let myString = "# Я навчаюся на курсі верстки!";
// myString = myString.replace("#", " ");
// console.log(myString);

//Основні методи чисел
//Math.floor округлення в меншу сторону
// let someNum = 12.8;
// console.log(Math.floor(someNum));

//math.ceil
// let someNewNum = 56.03;
// console.log(Math.ceil(someNewNum));

//Math.round
// let someSecondNum = 890.7;
// console.log(Math.round(someSecondNum));

//Math.abc

// let someFirstNum = -45;
// console.log(Math.abs(someFirstNum));
//ranom
// console.log(Math.random());

//Math.max(a, b, c ...) / Math.min(a, b, c ...)
// console.log(Math.max(4, 8, -12));
// console.log(Math.min(4, 8, -12));
// let numMax = Math.max(4, 8, -12);
// console.log(numMax);

// parseInt - бере тільки цілі числа відкидаючи px
//parseFloat бере все число

// let someVar = `35.5px`;
// let someFirstNum = parseInt(someVar);
// console.log(someFirstNum);
// let someThirdNum = parseFloat(someVar);
// console.log(someThirdNum);

//ОСНОВНІ ОПЕРАТОРИ

// let varOne = "t";
// let varTwo = "3";
// varOne = Number(varOne);
// console.log(typeof varOne);
// console.log(varOne);
// console.log(typeof varTwo);
// console.log(varTwo);

// Оператор '-'
// let res = varOne - varTwo;
// console.log(res);

//  Ділення '/'
// let someRes = varOne / varTwo;
// console.log(someRes);

// let res = varOne % varTwo;
// console.log(typeof res);

// console.log(res);

//Множення "*"
// let someRes = varOne * varTwo;
// console.log(typeof someRes);
// console.log(someRes);

//Оператор додавання не змінює тип данних
// let res = varOne + varTwo;
// console.log(Boolean(res));
// res = Boolean(res);
// console.log(typeof res);
// console.log(res);

// let varSum = varOne + varTwo;
// console.log(typeof varSum);
// console.log(varSum);

let someOne = 3;
let someTwo = 2;
// --someOne;
// someTwo++;

// let sumRes = someOne + someTwo;
// console.log(someOne);
// console.log(someTwo);
// console.log(sumRes);

// let varSum = varOne + varTwo;
// console.log(varSum);

//Піднесення до степені
// let x = 2 ** 4;
// console.log(`Результат: ${x}`);
// console.log(typeof x);
// let resString = "Astrea" + " " + "hello" + "!";
// console.log(resString);

// let resultFive = 30 + " u" + "slice" + ".";
// console.log(resultFive);

// let user = "45";
// let admin = "9";
// console.log(user + admin);
// console.log(typeof (user + admin));
// console.log(+user + +admin);
// console.log(typeof (+user + +admin));
//Пріорітетність операторів
// let resultOne = 15 - 3 * 3;
// console.log(resultOne);

// let resTwo = 12 - (7 * 3) / +"7";
// console.log(resTwo);
// let resTwo = 12 - 7 * 3 / 7
//let resTwo = 12 - 21 / 7
//let resTwo = 12 - 3
//let resTwo = 9

// let resTwo = ((12 - 7) * 3) / +"7";
// console.log(resTwo);
// let resTwo = (12 - 7) * 3 / 7
// let resTwo = 5 * 3 / 7
// let resTwo = 15 / 7
// let resTwo = 2.15

//ОПЕРАТОР ПРИСВОЄННЯ

// let a = 5 + 7;
// let b = 3;
// let res = 8 - (b = a + 3);
// console.log("Результат в скобках: " + b);
// console.log("Загальний результат : " + res);

// let users = 5;
// console.log(users);
// users += 3;
// console.log(users);
// users *= 3;
// console.log(users);

// ОПЕРАТОРИ ПОРІВНЯННЯ
//>, < , <=, =>;
//==, !=;
// ===, !==

// let a = 5 <= 7;
// console.log(a);

// let b = "5" <= 7;
// console.log(typeof b);
// console.log(b);

// let c = 5 >= 7;
// console.log(c);

// console.log("B" > "b"); // false
// console.log("b" > "A"); // true

// let result = 5 == "5";
// console.log(result);

// let result = 5 != "5";
// console.log(result);

// let resultOne = 5 !== "5";
// console.log(resultOne);

// let resultOne = 5 === "5";
// console.log(resultOne);

//ЛОГІЧНІ ОПЕРАТОРИ
// &&, !, ||

// 'ні' !
// let someString = !"123";
// console.log(someString);
// console.log(typeof someString);

// ОПЕРАТОР "АБО" ||
// let result = 1 || "";
// console.log(result);
// console.log(Boolean(result));

// let resultOne = 0 || "1";
// console.log(resultOne);
// console.log(Boolean(resultOne));

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// let userName = "";
// let userNickName = "Puppy";
// let users = userName || userNickName || "Not";
// console.log(users);
// console.log(Boolean(users));

// let a = 4;
// let b = 7;
// a > b || a++;
// console.log(a);
// console.log(Boolean(a));

// let resultOne = 0 && "1";
// console.log(resultOne);
// console.log(Boolean(resultOne));

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log((!true && 57) || (12 && !1));
//console.log((false && 57) || (12 && false));
//console.log((false ) || (  false));
//console.log(false);

// let massege = "Hello, Astrea";
// if (3 > 1) {
//   console.log(massege);
// }

// let varOne = 5;
// let varTwo = 30;
// console.log(Boolean(varOne));
// if (varOne) {
//   console.log("Працює!");
// }

// if (varOne > varTwo) {
//   console.log(`${varOne} більше ніж ${varTwo}`);
// } else if (varOne !== 5) {
//   console.log(`varOne дорівнює 5`);
// } else if (varTwo !== 30) {
// Чи true (правда) що varTwo дорівнює 20?
//   console.log(`varTwo дорівнює 30`);
// } else {  // Виконуємо якщо усі попередні умови повернули false
//   console.log(`Все пропало...`);
// }
// Виконуємо у будь-якому випадку
// console.log("Продовження коду...");

// ОПЕРАТОР УМОВИ
// let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5";
// console.log(someVar);

// let someVar = "123";
// let someNewVar = someVar ? "Так, все ок" : null;
// console.log(someNewVar);

// let message = "Hello";

// let messageEnd = 5 > 1 ? "Tom" : "Loura";
// console.log(messageEnd);

// let someString = "А я вивчаю самостійно англійську мову";
// console.log(someString.length);

//ЦИКЛ FOR
// for (let i = 0; i < someString.length; i++) {
//   console.log(someString[i]);
// }

// for (let num = 0; num < 5; num++) {
//   console.log(num);
// }

//МАСИВ
// let someArray = [];
// console.log(typeof someArray);
// console.log(Array.isArray(someArray));

// let someArray = ["Hello", 98, false, "tiger", 5];
// console.log(someArray);
// console.log(someArray.length);
// console.log(someArray[3]);
// console.log(someArray[4]);

// for (let i = 0; i < someArray.length; ++i) {
//   console.log(i);
//   console.log(someArray[i]);
// }

// someArray.forEach((value, index) => {
// Номер ячейки
// console.log(index);
// Значення ячейки
// console.log(value);
//   if (typeof value === "string") {
//  for (let i = 0; i < value.length; ++i) {
//  console.log(value[0]);
//  }
//  console.log(index);
//  console.log(value[0]);

//   if (value === "tiger") {
//  console.log(value[2]);
//   }
// });

//PUSH - ДОДАВАННЯ ЕЛЕМЕНТА В МАСИВ
// let pats = ["кіт", "песик", "кролик"];
// console.log(pats);
// pats.push("шиншила");
// console.log(pats);

//INCLUDES - знайти елемент в масиві

// console.log(pats.includes("песик")); //повертається true, якщо знайшли. Якщо не знайшли - false
//Якщо в масиві НЕМАЄ значення хом'як
// if (!pats.includes("хомяк")) {
//то додаємо
//   pats.push("хомяк");
// }
// console.log(pats);

//Переводимо значення із масива у рядок
// let patsBig = pats.join();
// console.log(patsBig);

// ФУНКЦІЇ
//запускаеться з льобого місця і багато разів
// showMessage();
// function showMessage() {
//   console.log("Hello, baby!");
// }
// showMessage();
// showMessage();
// showMessage();
// showMessage();
// function showMessage(someText) {
//   console.log(someText);
// }

// showMessage("Hello");
// showMessage("Goodbye");

// function showMessage(someText = "Текст за замовченням") {
//   console.log(someText);
// }
// showMessage();
// showMessage("Все ок, тримаємось!");
// let numOne = 10;
// let numTwo = 5;
// function calcSumm(numOne, numTwo) {
//   console.log(numOne);
//   console.log(numTwo);
//   let numSum = numOne + numTwo;
//   console.log(numSum);
// }
// calcSumm(1, 2);
// calcSumm(numOne, numTwo);

// function numSumm(a = 0, b = 0) {
//   const result = a + b;
//   showMessage(result);
// }
// function showMessage(someText = "Текст за замовченням") {
//   console.log(someText);
// }
// numSumm();

//ПОВЕРНЕННЯ РЕЗУЛЬТАТУ

// function calcSumm(a = 0, b = 0) {
//   return a + b;
// }
// function showMessage(someText = "Текст за замовченням") {
//   console.log(someText);
// }
// showMessage(calcSumm());
// showMessage(calcSumm(39, 2));

let someVar;
let someFuncVar;
function someFunc() {
  someVar = 10;
  someFuncVar = function (message) {
    console.log(message);
  };
}
someFunc();
someFuncVar("Hello");
console.log(someVar);

// function some(text) {
//   console.log(text);
// }
// some("I am Tom");
// some("I am  not Tom");

// let someText = "";
// console.log(someText);
// someText = someText + `<div></div>`;
// console.log(someText);
// someText = someText + `<a href="contacts.html"></a>`;
// console.log(someText);

// let someText = "";
// console.log(someText);
// someText += `<div>`;
// someText += `<a href="contacts.html"></a>`;
// someText += `</div>`;
// console.log(someText);
const text = "Hello, guy!";
let template = ``;

function createText(someText) {
  for (let i = 0; i < someText.length; ++i) {
    const item = someText[i];
    template += `<span style="animation-delay: 0.${i}s">${item}</span>`;
  }
}
createText(text);

const page__container = document.querySelector(".page__container");
page__container.insertAdjacentHTML("beforeend", template);

//ЗАДАЧА №1
//Що потрапить в консоль?

let someVarSecond = 0;
++someVarSecond;

if (someVarSecond) {
  console.log(someVarSecond);
}
//в консоль потрапить 1 тому що зміну збільшили на одиницю 0 + 1

//ЗАДАЧА №2
//За допомогою циклу FOR виведіть в консоль 10 рядків:
//Пункт №1
//Пункт №2
//і т.д.

for (let i = 1; i <= 10; i++) {
  let item = `Пункт №${i}`;
  console.log(item);
}
//Задача №3
//Що потрапить в консоль ?
if (2 * 20 <= 10 || (30 / 2 < 5 && 10 <= "10") || 20 === "20") {
  console.log("000");
}
//if (2 * 20 <= 10 || (15 < 5 && true) || 20 === "20")
//if (2 * 20 <= 10 || (false && true) || 20 === "20")
//if (2 * 20 <= 10 || false || 20 === "20")
//false|| false || false
//в консоль потрапить false

//Задача №4
//Створіть функцію, яка повертає результат ділення числа a на число b з додаванням рядка "Результат ділення: "
//Викличте функцію передаючі різні значення, у тому числі не передаючи зовсім.
//Функція не має повертати NaN, Infinite або помилку
//Перший спосіб
function calcDivision(a = 0, b = 0) {
  const result = a / b;
  let divisionContent = "Результат ділення:";
  let divisionContentError = "Ділити не можна";
  if (typeNumber(a) && typeNumber(b)) {
    if (b !== 0) {
      return (divisionContent += result);
    }
  } else {
    return (divisionContent += divisionContentError);
  }
}
function funcResult(text = "Нічого не вказано") {
  console.log(text);
}
function typeNumber(someValue) {
  if (typeof someValue == "number") {
    return someValue;
  } else {
    return false;
  }
}
funcResult();
funcResult(calcDivision());
funcResult(calcDivision(6, 2));
funcResult(calcDivision(12, 0));
funcResult(calcDivision(12, "12"));
funcResult(calcDivision(12, true));
funcResult(calcDivision(45, 10));

//Другий спосіб

// Задача №5
// Створіть масив даних - 5 елементів, один з яких число 10
// Обробіть масив за допомогою методу перебору
// Перевіряйте елемент на відповідність числу 10, та у разі відповідності, виводьте в консоль

let someArray = ["Hi", true, "hello", "10", 10];
console.log(someArray);
someArray.forEach((value, index) => {
  if (value === 10) {
    console.log(index);
    console.log(value);
  }
});

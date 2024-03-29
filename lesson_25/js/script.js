//
"use strict";
//ДОМАШНЯ РОБОТА
//Задача №1
//Отримати в константу елемент <body>

const bodyElement = document.body;
/*-------------------------------------------------------------------------------------------*/
//Задача №2
//Написати функцію, яка додає в <body> список UL
//з певною кількістю LI (кількість має передаватись як параметр функції, //також мати значення за замовченням)

function addListToBody(listItems = 4) {
  const newList = document.createElement("ul");
  let listElements = ``;
  for (let i = 1; i <= listItems; i++) {
    listElements += `<li>Item № ${i}</li>`;
  }
  newList.insertAdjacentHTML("afterbegin", listElements);
  bodyElement.insertAdjacentElement("afterbegin", newList);
}
addListToBody(6);

/*-------------------------------------------------------------------------------------------*/
//Задача №3
//Додати до елементу <body> класс loaded.
//Потім перевірити чи є клас loaded у елемента <body>
//і, якщо є, додати стиль кольору тесту зедлений.
bodyElement.classList.add("loaded");
//console.log(bodyElement);
if (bodyElement.classList.contains("loaded")) {
  bodyElement.style.color = "green";
}
/*-------------------------------------------------------------------------------------------*/
//Задача №4
//Дано в html: три елементи з класом item.
//Треба отримати ці елементи в константу, кожному додати клас active,
//та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".

const itemElement = document.querySelectorAll(".item");
if (itemElement.length) {
  itemElement.forEach((item, index) => {
    item.classList.add("active");
    item.textContent = `Елемент № ${index + 1}`;
  });
}
/*-------------------------------------------------------------------------------------------*/
//Задача №5
//Дано в html: текст, далі кнопка з класом button.
//Треба прокрутити скрол сторінки до кнопки
const button = document.querySelector(".button");

function scrollToButton(element) {
  if (button) {
    button.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: "smooth",
    });
  }
}
scrollToButton();

/*-------------------------------------------------------------------------------------------*/
//Задача №6
//Дано в html: посилання з класом link
//Треба додати до посилання дата атрибут зі значенням 100
//Поім отримати значення трибуту, та, якщо значення меньше 200
//пофарбувати колір тексту посилання в червоний

const link = document.querySelector(".link");
if (link) {
  link.dataset.value = 100;
  if (link.dataset.value < 200) {
    link.style.color = "red";
  }
}

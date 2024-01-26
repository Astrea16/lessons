//суворий режим
"use striсе";
//Об'єкти
// const someObject = {
//   name: "Ann",
//   age: 56,
// };
// console.log(someObject);
// console.log(someObject.age);
// someObject.name = "Tom";
// console.log(someObject);

// const windowSize = {
//   window: window.innerWidth,
//   height: window.innerHeight,
// };
// windowSize.height;
// console.log(windowSize);

//Події
//Синтаксис
//elem/document.addListener("імя події", func, options)
//elem/document.addListener("імя події", ( ) => {code}, options)

const link = document.querySelector(".page__link");

// link.addEventListener("clink", function () {
//code..
// });

//або
// link.addEventListener("click", clickReaction);
// link.addEventListener("mouseenter", clickReaction);
// link.addEventListener("mouseleave", clickReaction);
// link.addEventListener("mousemove", clickReaction);
// function clickReaction() {
//code..
//   console.log("Click!");
// }

// Події для багатьох елементів
// const links = document.querySelectorAll(".page__link");

// links.forEach((link) => {
//   link.addEventListener("click", clickReaction);

// });
// function clickReaction() {
//code..
//   console.log("Click!");
// }

//event
// const links = document.querySelectorAll(".page__link");
// links.forEach((link) => {
//   link.addEventListener("click", clickReaction);
//   link.addEventListener("mouseenter", clickReaction);
//   link.addEventListener("mouseleave", clickReaction);
//   link.addEventListener("mousemove", clickReaction);
// });
// function clickReaction(e) {
//code..
//console.log(e);
//   console.log(e.type);
//console.log("Click!");
//   console.log(e.target);
//   const tag = e.target.tagName;
//   if (tag === "BUTTON") {
//     alert("I'm button");
//   }
//   e.preventDefault();
// }

//ДЕЛЕГУВАННЯ
/*
document.addEventListener("click", documentAction);

 function documentAction(e) {
  const targetElement = e.target;
  //console.log(targetElement);
  if (targetElement.closest(".page__link")) {
    console.log("Добре, те що потрібно");
    e.preventDefault();
  }

  if (targetElement.closest(".page__button")) {
    console.log("Це також  потрібно");
    e.preventDefault();
  }
}
const page = document.querySelector(".page");

page.insertAdjacentHTML("beforeend", `<a href = "#" class="page__link">Я посилання</a>`);
*/

//SCROLL

//IntersctionObserver

let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  thershold: 0.3,
};

let callback = (entries, observer) => {
  entries.forEach((entry) => {
    const targetElement = entry.target;
    if (entry.isIntersecting) {
      targetElement.classList.add("show");
      console.log("Мене  видно?");
    } else {
      targetElement.classList.remove("show");
      console.log("Мене не видно?");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

//Якщо один обєкт

const target = document.querySelector(".page__button");
observer.observe(target);

//багато обєктів
let someElement = document.querySelectorAll("[class*='--anim']");
someElement.forEach((someElement) => {
  observer.observe(someElement);
});

//ЗАВАНТАЖЕННЯ
/*
window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded(e) {}
*/
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
  document.body.classList.add("loaded");
}

//ТАЙМЕР
/*
function someFunc() {
  console.log("go,go, go");
}
setTimeout(() => {
  someFunc();
}, 5000);
 */
//ІНТЕРВАЛ
//setInterval()
//зупинка інтервалу
/*
let i = 20;
let timer = setInterval(() => {
  console.log(i);
  i === 30 ? clearInterval(timer) : null;
  ++i;
}, 1000);
*/
/*
let a = 20;
let timerSecond = setInterval(() => {
  console.log(a);
  a === 1 ? clearInterval(timerSecond) : null;
  --a;
}, 1000);
*/
document.addEventListener("click", documentAction);

function documentAction(e) {
  const targetElement = e.target;
  if (targetElement.closest(".icon-menu")) {
    document.documentElement.classList.toggle("menu-open");
  } else if (targetElement.closest(".menu__link")) {
    if (document.documentElement.classList.contains("menu-open")) {
      document.documentElement.classList.remove("menu-open");
    }
    const link = targetElement.closest(".menu__link");
    const goto = link.dataset.goto;
    const gotoElement = document.querySelector(goto);

    if (gotoElement) {
      gotoElement.scrollIntoView({
        behavior: "smooth",
      });
    }
    e.preventDefault();
  }

  if (targetElement.closest(".button__code")) {
    const pageInput = document.querySelector(".page__input");
    console.log(pageInput.getAttribute("type"));
    if (pageInput.getAttribute("type") === "password") {
      pageInput.setAttribute("type", "text");
      targetElement.closest(".button__code").textContent = "Приховати пароль";
    } else {
      pageInput.setAttribute("type", "password");
      targetElement.closest(".button__code").textContent = "Показати пароль";
    }
  }
}

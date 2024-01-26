"use sctrict";
/*
Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/

document.addEventListener("click", documentAction);

function documentAction(e) {
  const targetElement = e.target;
  // console.log("Є такий елемент");
  if (targetElement.closest(".page__item")) {
    targetElement.classList.toggle("active");
  }
}

/*
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
window.addEventListener("load", pageLoaded);
function pageLoaded(e) {
  document.body.classList.add("loaded");
}

/*
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
//На елемент header додаємо обробник події
if (header || footer) {
  header.addEventListener("mouseenter", function () {
    footer.classList.add("footer-background");
  });

  header.addEventListener("mouseout", function () {
    footer.classList.remove("footer-background");
  });
}
/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/
let options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  thershold: 0.3,
};

let counterElement = (entries, observer) => {
  entries.forEach((entry) => {
    const counterItem = entry.target;
    const start = parseInt(counterItem.getAttribute("data-start"));
    const end = parseInt(counterItem.getAttribute("data-end"));
    const delay = parseInt(counterItem.getAttribute("data-delay"));

    observer.observe(counterItem);

    if (entry.isIntersecting) {
      let change = start;
      const intervalChange = setInterval(() => {
        counterItem.textContent = change;
        change++;
        if (change > end) {
          clearInterval(intervalChange);
        }
      }, delay);
    }
  });
};
let observer = new IntersectionObserver(counterElement, options);

const itemElement = document.querySelector(".counter");
if (itemElement) {
  observer.observe(itemElement);
  console.log(itemElement);
}

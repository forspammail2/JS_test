'use strict';

//1. Восстановить порядок в меню, добавить пятый пункт
let menu = document.body.querySelector('.menu');
let menuItem = document.body.querySelectorAll('.menu-item');

menu.insertBefore(menuItem[1], menuItem[3]);

let li5 = menuItem[3].cloneNode();
li5.innerHTML = "Пятый пункт";

menu.appendChild(li5);

//2. Заменить картинку заднего фона на другую из папки img
let body = document.querySelector('body');
body.style.background = "url(../homework6/img/apple_true.jpg)";

//3. Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
let title = document.body.querySelector('.title');
title.textContent = "Мы продаем только подлинную технику Apple";

//4. Удалить рекламу со страницы
let adv = document.querySelector('.adv');
adv.remove();

//5. Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let userAnswer = prompt("Как Вы относитесь к технике apple?", "");

let promptItem = document.querySelector('.prompt');
promptItem.textContent = userAnswer;
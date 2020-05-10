'use strict';
//Задание по проекту

// Получить кнопку "Начать расчет" через id
let btnOpen = document.getElementById('start');
console.log(btnOpen);


// Получить все блоки в правой части программы через классы (которые имеют класс название - value, начиная с и заканчивая)
let listBlockValue = [];
//let block_value = document.body.getElementsByClassName("result");
let blockValue = document.body.getElementsByClassName("result-table");
if (blockValue.length > 0) {
    let childs = blockValue[0].childNodes;
    for (let item of childs) {
        //console.log("className: " + item.className);
        let className = item.className + "";
        if (className.includes("-value")) {
            //console.log(className);
            listBlockValue.push(item);
        }
    }
}

console.log(listBlockValue);


// Получить поля(input) c обязательными расходами через класс.(class = ”expenses - item”)
let listExpensesItem = [];
//let block_value = document.body.getElementsByClassName("result");
let inputExpensesItem = document.body.getElementsByClassName("expenses-item");
if (inputExpensesItem.length > 0) {
    //let childs = inputExpensesItem[0].childNodes;
    for (let item of inputExpensesItem) {
        //console.log("className: " + item.className);
        let className = item.className + "";
        if (className.includes("expenses-item")) {
            //console.log(className);
            listExpensesItem.push(item);
        }
    }
}

console.log(listExpensesItem);

// Получить кнопки“ Утвердить” и“ Рассчитать” через Tag, каждую в своей переменной.
let btnApprove = document.querySelector('.expenses-item-btn');
console.log(btnApprove);

let btnApproveOptional = document.querySelector('.optionalexpenses-btn');
console.log(btnApproveOptional);

let btnCountBudget = document.querySelector('.count-budget-btn');
console.log(btnCountBudget);

// Получить поля для ввода необязательных расходов(optionalexpenses - item) при помощи querySelectorAll
//let block_value = document.body.getElementsByClassName("result");
let inputItemOptional = document.body.querySelectorAll(".optionalexpenses-item");
console.log(inputItemOptional);

// Получить оставшиеся поля через querySelector(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let inputChooseIncome = document.body.querySelector(".choose-income");
console.log(inputChooseIncome);

let checkboxSavings = document.body.querySelector("#savings");
console.log(checkboxSavings);

let inputChooseSum = document.body.querySelector(".choose-sum");
console.log(inputChooseSum);

let inputChoosePercent = document.body.querySelector(".choose-percent");
console.log(inputChoosePercent);

let inputChooseTear = document.body.querySelector(".year-value");
console.log(inputChoosePercent);

let inputMonth = document.body.querySelector(".month-value");
console.log(inputMonth);

let inputDay = document.body.querySelector(".day-value");
console.log(inputDay);
'use strict';
//Задание по проекту

// Получить кнопку "Начать расчет" через id
let btnStart = document.getElementById('start'),
    budgetValue = document.body.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.body.getElementsByClassName("daybudget-value")[0],
    levelValue = document.body.getElementsByClassName("level-value")[0],
    expensesValue = document.body.getElementsByClassName("expenses-value")[0],
    optionalExpensesValue = document.body.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.body.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.body.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.body.getElementsByClassName("yearsavings-value")[0],


    expensesItem = document.body.getElementsByClassName("expenses-item"),
    expensesBtn = document.getElementsByTagName("button")[0],
    optionalExpensesBtn = document.getElementsByTagName("button")[1],
    countExpensesBtn = document.getElementsByTagName("button")[2],
    incomeItem = document.body.querySelectorAll(".choose-income"),
    checkSaving = document.body.querySelector("#savings"),
    sumValue = document.body.querySelector(".choose-sum"),
    percentValue = document.body.querySelector(".choose-percent"),
    yearValue = document.body.querySelector(".year-value"),
    monthValue = document.body.querySelector(".month-value"),
    dayValue = document.body.querySelector(".day-value");
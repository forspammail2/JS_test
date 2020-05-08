'use strict';

var money = +prompt("Ваш бюджет на месяц?", "100");

var time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-08");

var appData = {
    budget: money,
    timeData: time,
    expenses: "",
    optionalExpenses: "",
    income: [],
    savings: false
};

let descr = prompt("Введите обязательную статью расходвов в этом месяце", "Квартплата");
let value = +prompt("Во сколько обойдется", "25");

var exprenses = {
    descr: value
};

appData.expenses = exprenses;

var budgetAtDay = (money - value) / 30;
alert("Бюджет на 1 день: " + budgetAtDay);
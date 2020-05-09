'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "100");

    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-08");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "100");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходвов в этом месяце", "Квартплата");
        let b = prompt("Во сколько обойдется", "25");

        if ((typeof (a)) === "string" &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != "" &&
            b != "" &&
            a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}

chooseExpenses();

function detectDayBudget(budget) {
    appData.moneyPerDay = (budget / 30).toFixed(2);

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget(appData.budget);


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("МИнимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let a = +prompt("Статья необязательных расходов № " + i + ". Во сколько обойдется: ", "5");

        if ((typeof (a)) != null && (a != "")) {
            appData.optionalExpenses[i] = a;
        } else {
            i = i - 1;
        }
    }
}

chooseOptExpenses();
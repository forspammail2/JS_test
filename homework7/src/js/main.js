'use strict';
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
    btnExpenses = document.getElementsByTagName("button")[0],
    btnOptionalExpenses = document.getElementsByTagName("button")[1],
    btnCount = document.getElementsByTagName("button")[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.body.querySelector(".choose-income"),
    checkSaving = document.body.querySelector("#savings"),
    sumValue = document.body.querySelector(".choose-sum"),
    percentValue = document.body.querySelector(".choose-percent"),
    yearValue = document.body.querySelector(".year-value"),
    monthValue = document.body.querySelector(".month-value"),
    dayValue = document.body.querySelector(".day-value");

let money, time;

btnStart.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-08");
    money = +prompt("Ваш бюджет на месяц?", "100");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "100");
    }

    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = appData.budget.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

btnExpenses.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value;
        let b = expensesItem[++i].value;

        if ((typeof (a)) === "string" &&
            (typeof (a)) != null &&
            (typeof (b)) != null &&
            a != "" &&
            b != "" &&
            a.length < 50) {
            appData.expenses[a] = b;

            sum += +b;
        } else {
            i = i - 1;
        }
    }

    expensesValue.textContent = sum;
});

btnOptionalExpenses.addEventListener('click', function () {
    for (let i = 0; i <= optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

btnCount.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "МИнимальный уровень достатка!";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка!";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка!";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;

    appData.income = items.split(',');

    incomeValue.textContent = appData.income;
});

checkSaving.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
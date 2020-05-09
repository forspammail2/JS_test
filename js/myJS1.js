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
    savings: true,
    chooseExpenses: function () {
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
    },

    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },

    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("МИнимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },

    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;

            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let a = +prompt("Статья необязательных расходов № " + i + ". Во сколько обойдется: ", "5");

            if ((typeof (a)) != null && (a != "")) {
                appData.optionalExpenses[i] = a;
            } else {
                i = i - 1;
            }
        }
    },

    chooseIncome: function () {
        let items;
        do {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        } while (items == null || items == "");

        appData.income = items.split(',');

        let buf = prompt("Может что-то еще?", "");
        if (buf != null && buf != "") {
            appData.income.push(buf);
        }

        appData.income.sort();

        appData.income.forEach(function (item, i, arr) {
            alert("Способы доп. заработка: " + (+i + 1) + " " + item + " (массив:" + arr + ")");
        });
    }
};

appData.chooseOptExpenses();
appData.chooseIncome();

for (let key in appData) {
    console.log("appData[" + key + "] = " + appData[key]);
}
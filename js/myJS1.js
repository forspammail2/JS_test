'use strict';

let money = +prompt("Ваш бюджет на месяц?", "100");

let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-05-08");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходвов в этом месяце", "Квартплата");
//     let b = prompt("Во сколько обойдется", "25");

//     if ((typeof (a)) === "string" &&
//         (typeof (a)) != null &&
//         (typeof (b)) != null &&
//         a != "" &&
//         b != "" &&
//         a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }
// }

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходвов в этом месяце", "Квартплата");
//     let b = prompt("Во сколько обойдется", "25");

//     if ((typeof (a)) === "string" &&
//         (typeof (a)) != null &&
//         (typeof (b)) != null &&
//         a != "" &&
//         b != "" &&
//         a.length < 50) {
//         appData.expenses[a] = b;
//     } else {
//         i = i - 1;
//     }
//     i++;
// }

let i = 0;
do {
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
    i++;
} while (i < 2);



appData.moneyPerDay = (appData.budget) / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("МИнимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
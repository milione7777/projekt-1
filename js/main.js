const age = 16;
console.log(age);

const name = "Артем";
console.log(name);

const isStudent = false;
console.log(isStudent);

const myString = "To, что нас не убивает, делает нас сильнее. – Фридрих Ницше";
console.log (myString);

let myNumber = 30;
myNumber += 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Будь ласка, введіть своє ім'я:");
alert("Привіт, " + userName + "!");

let confirmation = confirm("Ви підтверджуєте дію?");

if (confirmation) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}

alert("Увага! Ця дія є небезпечною!");

let confirms = confirm("Ви впевнені, що хочете продовжити?");

if (confirms) {
    alert("Дякую за підтвердження!");
} else {
    alert("Дію відмінено!");
}
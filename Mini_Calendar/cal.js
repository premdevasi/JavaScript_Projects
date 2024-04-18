const month = document.querySelector('.month');
const day = document.querySelector('.day');
const date = document.querySelector('.date');
const year = document.querySelector('.year');

console.log(month, day, date, year);

const currentDate = new Date();
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const monthIndex = currentDate.getMonth();
const currentMonthName = monthNames[monthIndex];
console.log(currentMonthName);

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const dayIndex = currentDate.getDay();
const currentDayName = dayNames[dayIndex];
console.log(currentDayName);

const currDate = currentDate.getDate();
const currYear = currentDate.getFullYear();
console.log(currYear);

month.innerHTML = currentMonthName;
day.innerHTML = currentDayName;
date.innerHTML = currDate;
year.innerHTML = currYear;
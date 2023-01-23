//--------------1 task--------------

// const createCalendar = (elem, month, year) => {
//     const firstDayOfMonth = (new Date(year, month-1)).getDay();
//     let table = '<table><thead><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Нд</th></thead>';

//     let date = 1;
//     for (let weeks = 0; weeks < 6; weeks++) {
//         let row = "<tr>";
//         for (let days = 0; days < 7; days++) {
//             if (weeks === 0 && days < makeMonday(firstDayOfMonth)) {
//                 row += "<td>" + "*";
//             }
//             else if (date > getDaysInMonth(month, year)) {
//                 break;
//             }
//             else {
//                 row += "<td>" + date;
//                 date++;
//             }
//         }
//         table += row; 
//     }
//     elem.innerHTML = table;
// };

// const getDaysInMonth = (month, year) => {
//     return 32 - new Date(year, month-1, 32).getDate();
// };

// const makeMonday = day => { 
//     if (day == 0) day = 7; 
//     return day - 1;
// };

// createCalendar(cal, 1, 2023);

//--------------2 task--------------

// const showNotification = (options) => {
//     const {top, right, html, className, zIndex, position} = options;

//     const notification = document.createElement("div");

//     notification.style.top = top ? top + "px" : 0 + "px";
//     notification.style.right = right ? right + "px" : 0 + "px";
//     notification.innerHTML = html ? html : "hello world";
//     notification.className = className ? `notification ${className}`: "notification";
//     notification.style.zIndex = `${zIndex ? zIndex : 1000}`;
//     notification.style.position = position ? position : "fixed";

//     document.body.append(notification);
//     setTimeout(() => notification.remove(), 1500);
// };

// showNotification({
//     top: 10,
//     right: 10,
//     html: "hello",
//     className: "welcome"
// });

//--------------3 task--------------

// document.onclick = function(e) { 
//     coords.innerHTML = e.clientX + ':' + e.clientY;
// };

// {
//     const coordsField = field.getBoundingClientRect();
//     const {top, right, bottom, left} = coordsField;

//     const corners = { 
//         1: `${Math.round(left)} : ${Math.round(top)}`,
//         2: `${Math.round(right)} : ${Math.round(bottom)}`,
//         3: `${Math.round(left + field.clientLeft)} : ${Math.round(top + field.clientTop)}`,
//         4: `${Math.round(left + field.clientWidth + field.clientLeft)} : ${Math.round(top + field.clientHeight + field.clientTop)}`,
//     };

//     let result = "";
//     for (let corner in corners) {
//         result += `${corner}---${corners[corner]}<br>`;
//     }
//     field.innerHTML = result;
// }
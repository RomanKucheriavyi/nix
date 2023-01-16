//--------------1 task--------------

// const camelize = str => {
//     return (
//         str ? 
//         str.split("-")
//             .map((el, index) => index === 0 ? el : el[0].toUpperCase() + el.slice(1))
//             .join("") : 
//         str
//     )
// };

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

//--------------2 task--------------

// const filterRange = (arr, minValue, maxValue) => {
//     return (
//         arr ? 
//         arr.filter(el => minValue < maxValue ? 
//             el > minValue && el < maxValue : 
//             el < minValue && el > maxValue) : 
//         arr
//     )
// };

// const arr = [5, 3, 8, 1];
// const filteredArr = filterRange(arr, 1, 4);
// console.log((filteredArr));
// console.log((arr)); 

//--------------3 task--------------

// const arr = [5, 3, 8, 1, 5, 6];

// function filterRangeInPlace (arr, minValue, maxValue) {
//     if (minValue < maxValue) {
//         for (let counter = 0; counter < arr.length; counter++){
//             if (arr[counter] < minValue || arr[counter] > maxValue) {
//                 arr.splice(counter, 1);
//                 counter--;
//             }
//         }
//     }
//     else {
//         for (let counter = 0; counter < arr.length; counter++){
//             if (arr[counter] < maxValue || arr[counter] > minValue) {
//                 arr.splice(counter, 1);
//                 counter--;
//             }
//         }
//     }
// }

// console.log (arr);
// filterRangeInPlace(arr, 1, 4);
// console.log (arr);

//--------------4 task--------------

// const arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr); 

//--------------5 task--------------

// const copySorted = arr => arr ? [...arr].sort() : arr; 

// const arr = ["HTML", "JavaScript", "CSS"];
// const sorted = copySorted(arr);
// console.log(sorted); 
// console.log(arr); 

//--------------6 task--------------

// function Calculator(funcs) {
//     this.funcs = funcs

//     this.calc = function () {
//         const expr = prompt("Enter your expression(with spaces)", "0");
//         if (!expr) {
//             return
//         }
//         const split = expr.split(' ');
//         const  x = +split[0];
//         const  oper = split[1];
//         const  y = +split[2];

//         if (!this.funcs[oper] || isNaN(x) || isNaN(y)) {
//             return
//         }

//         console.log(this.funcs[oper](x, y));
//     }  
// }

// const calculator = new Calculator({
//     '+': (x, y) => x + y,
//     '-': (x, y) => x - y,
//     "/": (x, y) => x / y,
//     "*": (x, y) => x * y,
// });
// calculator.calc();

//--------------7 task--------------

// const vasya = { name: "Вася", age: 25};
// const petya = { name: "Петя", age: 30};
// const masha = { name: "Маша", age: 28};
// const users = [ vasya, petya, masha ];
// const names = users.map(el => el.name);

// console.log(names); 

//--------------8 task--------------

// const vasya = {name : " Вася ", age: 25};
// const petya = {name : " Петя ", age: 30};
// const masha = {name : " Маша ", age: 28};
// const arr = [ vasya , petya , masha ] ;

// const sortByAge = arr => arr ? arr.sort((a, b) => a.age - b.age) : arr;

// sortByAge(arr);
// console.log(arr [0].name); 
// console.log(arr [1].name); 
// console.log(arr [2].name); 

//--------------9 task--------------

// const vasya = { name: "Вася", age: 25};
// const petya = { name: "Петя", age: 30};
// const masha = { name: "Маша", age: 29};
// const arr = [ vasya, petya, masha ];

// const getAverageAge = arr => arr ? arr.reduce((acc, el) => acc + el.age, 0) / arr.length : arr;

// console.log(getAverageAge(arr)); 

//--------------10 task--------------

// const unique = arr => arr ? new Set(arr) : arr;

// const strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// console.log(unique(strings));

//--------------14 task--------------

// const factorial = num => (!Number.isInteger(num) || num < 0) ? "too hard for me" : (num === 1 || num === 0) ? 1 : num * factorial(num-1);

// console.log(factorial(-1));
// console.log(factorial(0.75));
// console.log(factorial(5));

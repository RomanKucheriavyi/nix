//--------------1 task--------------

// const isEmpty = obj => {
//     if ((!!obj) && (obj.constructor === Object)) {
//         return  Object.keys(obj).length === 0 ? true : false;
//     }
//     else {
//         return "not an object";
//     }
// }

// console.log(isEmpty([]));
// console.log(isEmpty(null));
// console.log(isEmpty({}));
// console.log(isEmpty(() => {}));
// console.log(isEmpty({a:1, b:2}));
// console.log(isEmpty(new Boolean(true)));

//--------------2 task--------------

// const multiplyNumeric = obj => {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// let example = {
//     a: 100,
//     b: 150,
//     foo: "bar"
// };

// multiplyNumeric(example);
// console.log(example);

//--------------3 task--------------

// const readNumber = () => {
//     let num;

//     while (!isFinite(num)) {
//         num = prompt("Enter a number", "...")
//     };

//     if (num === null || num === "") return null;
// };

// console.log(readNumber());

//--------------4 task --------------

// const random = (min, max) => isFinite(min) && isFinite(max) ? Math.random() * (max - min) + min : "not a number";

// alert(random (1, 5));
// alert(random (1, 5)); 
// alert(random (1, 5)); 

//--------------5 task --------------

// const randomInteger = (min, max) => {
//     return isFinite(min) && isFinite(max) ? (  
//         min = Math.ceil(min),
//         max = Math.floor(max), 
//         Math.floor(Math.random() * (max - min + 1)) + min ) : 
//         "not a number";
// }

// alert(randomInteger (1, 5));
// alert(randomInteger (1, 5)); 
// alert(randomInteger (1, 5)); 

//--------------6 task --------------

// const ucFirst = str => str ? str[0].toUpperCase() + str.slice(1) : str; 

// console.log(ucFirst("вася"));

//--------------7 task --------------

// const checkSpam = str => str ? str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx") : str; 

// console.log(checkSpam( 'buy ViAgRA now'));
// console.log(checkSpam( 'free xxxxx '));
// console.log(checkSpam( "innocent rabbit"));

//--------------8 task --------------

// const truncate = (str, maxlength) => str && maxlength && (str.length > maxlength) ? str.slice(0, maxlength - 1) + "…" : str;

// console.log(truncate ( "Ось що мені хотілося б сказати на цю тему:", 20));
// console.log(truncate ( "Усім привіт!", 20));

//--------------9 task --------------

// const extractCurrencyValue = str => str ? str.replace("$", "") : str; 

// console.log(extractCurrencyValue('$120'));

//--------------10 task --------------

// const sumInput = () => {
//     let input = [];

//     while (true) {
//         let value = prompt("Enter a number", 0);

//         if ((value === "" || value === null || !isFinite(value))) break;
    
//         input.push(+value);
//     }
    
//     let sum = input.reduce(function(acc, val) { return acc + val; }, 0);

//     return sum;
// };

// console.log(sumInput());

//--------------12 task --------------

// const checkAge = age => age > 18 ? true : confirm( ' Батьки дозволили ?');

// const checkAge = age => age > 18 || confirm( ' Батьки дозволили ?');

//--------------13 task --------------

// const min = (num1, num2) => num1 === num2 ? "both are equal" : num1 < num2 ? num1 : num2;

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

//--------------14 task --------------

// const pow = (base, exponent) => exponent === 1 ? base : base * pow(base, exponent - 1);

// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

//--------------15 task --------------

// const ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask (
//     "Ви згодні?",
//     function ( ) { alert ("Ви погодилися."); },
//     function ( ) { alert ("Ви скасували виконання."); }
// );

//--------------16 task --------------

// const calcMonth = (income, price) => Math.ceil(price / income);

// console.log(calcMonth(3333-1750, 8000));

//--------------17 task --------------

// const negativeSumInput = () => {
//     let input = [];
//     const regExp = /^-?\d*\.?\d+$/;

//     for (let counter = 0; counter < 10; counter++) {
//         let value = prompt(`Enter a number ${counter}` , 0);
//         if (value === null || !value.match(regExp))
//         {
//             alert("You can't do that")
//             counter--;
//         }

//         if (value < 0) input.push(+value);
//     }
    
//     let sum = input.reduce(function(acc, val) { return acc + val; }, 0);

//     alert(sum);
// }

// negativeSumInput();
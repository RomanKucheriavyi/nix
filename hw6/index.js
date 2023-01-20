//--------------1 task--------------

// console.log(document.body.children[0]);
// console.log(document.body.children[1]);
// console.log(document.body.children[1].children[1]);

// //або

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.lastElementChild.lastElementChild);

//--------------2 task--------------

//Правда, так як він останній нащадок, то властивість nextSibling поверне null
//Ні, перед elem.children[0] можуть бути інші вузли, тому elem.children[0].previousSibling не обов'язково поверне null

//--------------3 task--------------

// const table = document.body.firstElementChild;

// //Array.from(table.rows).forEach((row, index) => row.cells[index].style.background = "red"); //червоний в один рядок

// for(let rCounter = 0; rCounter < table.rows.length; rCounter++) {
//     for(let cCounter = 0; cCounter < table.rows[rCounter].cells.length; cCounter++) {

//         if(rCounter === cCounter) {
//             table.rows[rCounter].cells[cCounter].style.background = 'red';
//         }
        
//         table.rows[rCounter].cells[cCounter].innerText = `${cCounter + 1}:${rCounter + 1}`;
//     }
// }

//--------------4 task--------------

// //1
// const table = document.querySelector("#age-table");
// console.log(table);
// //2
// const allLabels = document.querySelectorAll("#age-table label");
// console.log(allLabels);
// //3
// const firstTd = table.rows[0].cells[0];
// console.log(firstTd);
// //4
// const searchForm = document.querySelector("form[name='search']");
// console.log(searchForm);
// //5
// const firstSearchFormInput = searchForm.querySelector("input");
// console.log(firstSearchFormInput);
// //6
// const secondSearchFormInput = searchForm.lastElementChild;
// console.log(secondSearchFormInput);

//--------------5 task--------------

// //Працює навіть якщо багато ul
// const items = document.querySelectorAll('li');
// items.forEach(item => {
//     item = `text:${item.firstChild.textContent.trim()}, childrens:${item.querySelectorAll('li').length}`;
//     console.log(item)}
// );

// //Працює лише з одним ul, рекурсія
// const findChildren = (ul) => {
//     if (!ul) {
//         return;
//     }
//     for (let item of ul.children) {
//         console.log(`text:${item.firstChild.textContent.trim()}, childrens:${item.querySelectorAll('li').length}`);
//         findChildren(item.firstElementChild);
//     }
// };

// const list = document.querySelector("ul");
// findChildren(list);


//--------------6 task--------------

//Код виведе 1, що означає елемент-вузол, яким є script

//--------------7 task--------------

//Код виведе BODY. Після виконання коду весь вміст body замінюється на коментар з текстом BODY. Текст капсом, бо текст в .tagName 
//в HTML завжди в верхньому регістрі.

//--------------8 task--------------

//document - екземпляр классу HTMLDocument.document instanceof HTMLDocument//true
//document ->[[Prototype]]-> HTMLDocument ->[[Prototype]]-> Document ->[[Prototype]]-> Node 
//Успадковує лише від Node

//--------------9 task--------------

// const list = document.querySelector("#elem");
// const clear = elem => {
//     while (elem.firstChild) {
//         elem.firstChild.remove()
//     }
// };

// clear(list);

//--------------10 task--------------

//Так як текст "aaa" в таблицю вставлений неправильно, то при рендері сторінки його винесли за межі table

//--------------11 task--------------

// const createList = () => {
//     const ul = document.createElement("ul");
//     document.body.append(ul);

//     let counter = 0;
//     while (true) {
//         counter++;
//         const listText = prompt(`Enter your item #${counter}`, "");
//         if (!listText) {
//             break;
//         }

//         const li = document.createElement('li');
//         li.textContent = listText;
//         ul.append(li);
//     }

//     if (ul.children.length === 0){
//         ul.remove()
//     }
// };

// createList();

//--------------12 task--------------

// const insertHTML = (newChild, parent, where = "afterend") => parent ? parent.insertAdjacentHTML(where, newChild) : parent;

// const text = '<li>2</li><li>3</li>'
// const one = document.querySelector("#one");
// insertHTML(text, one);



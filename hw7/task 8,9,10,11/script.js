//--------------8 task--------------

field.onclick = (event) =>  {
    let {clientHeight, clientLeft, offsetTop, offsetLeft, clientTop, clientWidth} = field;

    let height = offsetTop + clientTop;
    let width = offsetLeft + clientLeft;

    let ballCoords = {
        top: event.pageY - height - ball.offsetHeight / 2,
        left: event.pageX - width - ball.offsetWidth / 2
    }
    let {top, left} = ballCoords

    if(top < 0) top = 0;
    if(left < 0) left = 0;
    if(top > clientHeight - ball.offsetHeight) top = clientHeight - ball.offsetHeight;
    if(left > clientWidth - ball.offsetWidth) left = clientWidth - ball.offsetWidth;

    ball.style.top = top + 'px';
    ball.style.left = left + 'px';
};

//--------------9 task--------------

// const clickableTitle = document.querySelector("span");
// const list = document.querySelector("ul");

// const onClickHandler = () => {
//     let isOpen = true;

//     return () => {
//         isOpen = !isOpen,
//         isOpen ? 
//             (clickableTitle.textContent = "▼Солодощі (натисни мене)!", list.style.display = "") : 
//             (clickableTitle.textContent = "▶Солодощі (натисни мене)!", list.style.display = "none");
//     }
// };

// clickableTitle.addEventListener("click", onClickHandler());

//--------------10 task--------------

// const panes = document.querySelectorAll(".pane");

// panes.forEach(pane => {
//     pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>')
//     pane.firstChild.onclick = () => pane.remove()
// });

//--------------11 task--------------

// const genres = document.querySelector("#genres");

// let selected = genres.options[genres.selectedIndex];
// alert(selected.value + " " + selected.text);

// genres.insertAdjacentHTML("beforeend", '<option value="classic">Классика</option>');
// genres.lastChild.selected = true;



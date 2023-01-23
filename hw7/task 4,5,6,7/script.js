//--------------4, 5, 6 task--------------

const positionAt = (anchor, position, elem) => {
    const coordsBlockquote = anchor.getBoundingClientRect();
    const {top, right, bottom, left} = coordsBlockquote;

    switch (position) {
        case "top-out":
            elem.style.cssText = `
                top: ${top - elem.offsetHeight}px;
                left: ${left}px;
            `;
            break;
        case "bottom-out":
            elem.style.cssText = `
                left: ${left}px;
                top: ${bottom}px;
            `;
            break;
        case "right-out":
            elem.style.cssText = `
                left: ${right}px;
                top: ${top}px;
            `;
            break;

        case "top-in":
            elem.style.cssText = `
                top: ${top}px;
                left: ${left}px;
            `;
            break;
        case "bottom-in":
            elem.style.cssText = `
                left: ${left}px;
                top: ${bottom - elem.offsetHeight}px;
            `;
            break;
        case "right-in":
            elem.style.cssText = `
                left: ${right - elem.offsetWidth}px;
                top: ${top}px;
            `;
            break;
    }
};

const showNote = (anchor, position, html) => {
    const note = document.createElement('div');
    note.innerHTML = html;
    note.className = position.includes("-out") ? "note-out" : "note-in";
    document.body.append(note);

    setInterval(()=>positionAt(anchor, position, note), 5);
};

const blockquote = document.querySelector('blockquote');

const buttonShowExternalNotes = document.createElement("button");
buttonShowExternalNotes.innerHTML = "show external notes";
document.body.appendChild(buttonShowExternalNotes);

const buttonShowInternalNotes = document.createElement("button");
buttonShowInternalNotes.innerHTML = "show internal notes";
document.body.appendChild(buttonShowInternalNotes);

const buttonHideExternalNotes = document.createElement("button");
buttonHideExternalNotes.innerHTML = "hide external notes";
document.body.appendChild(buttonHideExternalNotes);

const buttonHideInternalNotes = document.createElement("button");
buttonHideInternalNotes.innerHTML = "hide internal notes";
document.body.appendChild(buttonHideInternalNotes);

buttonShowExternalNotes.addEventListener("click", () => {
    document.querySelector(".note-out") ? document.querySelector(".note-out") : (
        showNote(blockquote, "top-out", "note above"),
        showNote(blockquote, "bottom-out", "note below"),
        showNote(blockquote, "right-out", "note at the right")
    );
});
buttonShowInternalNotes.addEventListener("click", () => {
    document.querySelector(".note-in") ? document.querySelector(".note-in") : (
        showNote(blockquote, "top-in", "note top-in"),
        showNote(blockquote, "bottom-in", "note bottom-in"),
        showNote(blockquote, "right-in", "note at the right-in")
    );
});
buttonHideExternalNotes.addEventListener("click", () => {
    const notes = document.querySelectorAll(".note-out");
    notes.forEach(note => note.remove());
});
buttonHideInternalNotes.addEventListener("click", () => {
    const notes = document.querySelectorAll(".note-in");
    notes.forEach(note => note.remove());
});

//--------------7 task--------------

//Запуститься перший і третій рядок коду. В результаті буде: 1, 2. Перший рядок спрацює, бо в button.addEventListener 
//і button.removeEventListener передані різні екземпляри функції. Третьому рядку коду нічого не заважає працювати
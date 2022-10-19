import "./styles/index.css"

let box = document.createElement('div');
box.className = 'box';
document.body.append(box);

let buttonsWrapper = document.createElement('div');
buttonsWrapper.className = 'buttons-wrapper';
let statsWrapper = document.createElement('div');
statsWrapper.className = 'stats-wrapper';

box.append(buttonsWrapper, statsWrapper);

let startButton = document.createElement('button');
startButton.className = 'button start-button';
startButton.innerHTML = 'Shuffle and start';

let stopButton = document.createElement('button');
stopButton.className = 'button stop-button';
stopButton.innerHTML = 'Stop';

let saveButton = document.createElement('button');
saveButton.className = 'button save-button';
saveButton.innerHTML = 'Save';

let resultsButton = document.createElement('button');
resultsButton.className = 'button results-button';
resultsButton.innerHTML = 'Results';

buttonsWrapper.append(startButton, stopButton, saveButton, resultsButton);

let moves = document.createElement('div');
moves.className = 'moves';
moves.innerHTML = 'Moves: 0';
let time = document.createElement('div');
time.className = 'time';
time.innerHTML = 'Time: 00:00';

statsWrapper.append(moves,time);

let field = document.createElement('div');
field.className = 'field';
document.body.append(field);

let fieldSizeWrapper = document.createElement('div');
fieldSizeWrapper.className = 'field-size-wrapper';
document.body.append(fieldSizeWrapper);

let form = document.createElement('form');
form.className = 'form';
fieldSizeWrapper.append(form);

let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let input4 = document.createElement('input');
let input5 = document.createElement('input');
let input6 = document.createElement('input');
input1.setAttribute('type', 'radio');
input1.setAttribute('id', 'input1');
input1.setAttribute('name', 'input');
input2.setAttribute('type', 'radio');
input2.setAttribute('id', 'input2');
input2.setAttribute('name', 'input');
input2.setAttribute('checked', 'true');
input3.setAttribute('type', 'radio');
input3.setAttribute('id', 'input3');
input3.setAttribute('name', 'input');
input4.setAttribute('type', 'radio');
input4.setAttribute('id', 'input4');
input4.setAttribute('name', 'input');
input5.setAttribute('type', 'radio');
input5.setAttribute('id', 'input5');
input5.setAttribute('name', 'input');
input6.setAttribute('type', 'radio');
input6.setAttribute('id', 'input6');
input6.setAttribute('name', 'input');

let label1 = document.createElement('label');
let label2 = document.createElement('label');
let label3 = document.createElement('label');
let label4 = document.createElement('label');
let label5 = document.createElement('label');
let label6 = document.createElement('label');
label1.setAttribute('for', 'input1');
label2.setAttribute('for', 'input2');
label3.setAttribute('for', 'input3');
label4.setAttribute('for', 'input4');
label5.setAttribute('for', 'input5');
label6.setAttribute('for', 'input6');
label1.innerHTML = '3x3';
label2.innerHTML = '4x4';
label3.innerHTML = '5x5';
label4.innerHTML = '6x6';
label5.innerHTML = '7x7';
label6.innerHTML = '8x8';

form.append(input1, label1, input2, label2, input3, label3, input4, label4, input5, label5, input6, label6);

const inputsArray = document.querySelectorAll('input');
const labelsArray = document.querySelectorAll('label');

function changeInputView() {
    for (let i = 0; i < 6; i++) {
        labelsArray[i].style.border = 'none';
        labelsArray[i].style.color = '#829bd6';
        localStorage.setItem(`input${i+1}-checked`, 'false');
        if (inputsArray[i].checked) {
            labelsArray[i].style.border = '3px solid #829bd6';
            labelsArray[i].style.borderRadius = '10px';
            labelsArray[i].style.color = '#8ce068';
            localStorage.setItem(`input${i+1}-checked`, 'true');
            localStorage.getItem('input1-checked');
            localStorage.getItem('input2-checked');
            localStorage.getItem('input3-checked');
            localStorage.getItem('input4-checked');
            localStorage.getItem('input5-checked');
            localStorage.getItem('input6-checked');
        }
    }
}

window.addEventListener('load', () => {
    for (let i = 1; i <= 6; i++) {
        if(localStorage.getItem(`input${i}-checked`) === 'true') {
            inputsArray[i-1].checked = true;
            labelsArray[i-1].style.border = '3px solid #829bd6';
            labelsArray[i-1].style.borderRadius = '10px';
            labelsArray[i-1].style.color = '#8ce068';
        }
    }
});

form.addEventListener('input', () => {
    if (inputsArray[0].checked) empty.value = 9;
    if (inputsArray[1].checked) empty.value = 16;
    if (inputsArray[2].checked) empty.value = 25;
    if (inputsArray[3].checked) empty.value = 36;
    if (inputsArray[4].checked) empty.value = 49;
    if (inputsArray[5].checked) empty.value = 64;
    changeInputView();
});

const empty = {
    value: 0,
    top: 0,
    left: 0
}

let cellSize;
let counter = 0;
let cells;

const audio = document.createElement('audio');
field.appendChild(audio);
audio.setAttribute('src', '/assets/75305337ef8f53f.mp3');

const move = (index) => {
    const cell = cells[index];
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }

    audio.currentTime = 0;
    audio.play();

    cell.element.style.top = `${empty.top * cellSize}px`;
    cell.element.style.left = `${empty.left * cellSize}px`;

    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;
    counter++;

    const victory = cells.every(cell => {
        if (inputsArray[0].checked) return cell.value === cell.top * 3 + cell.left + 1; 
        if (inputsArray[1].checked) return cell.value === cell.top * 4 + cell.left + 1; 
        if (inputsArray[2].checked) return cell.value === cell.top * 5 + cell.left + 1; 
        if (inputsArray[3].checked) return cell.value === cell.top * 6 + cell.left + 1; 
        if (inputsArray[4].checked) return cell.value === cell.top * 7 + cell.left + 1; 
        if (inputsArray[5].checked) return cell.value === cell.top * 8 + cell.left + 1; 
    })
    
    if (victory) {
        setTimeout(() => {
            alert(`Hooray! You solved the puzzle in ##:## and ${counter} moves`);
        }, 330)
    }
}

const createPuzzle = () => {
    if (inputsArray[0].checked) cellSize = 320/3;
    if (inputsArray[1].checked) cellSize = 320/4;
    if (inputsArray[2].checked) cellSize = 320/5;
    if (inputsArray[3].checked) cellSize = 320/6;
    if (inputsArray[4].checked) cellSize = 320/7;
    if (inputsArray[5].checked) cellSize = 320/8;
    let numbers;

    if (inputsArray[0].checked) {
        numbers = [...Array(8).keys()].sort(() => Math.random() - 0.5);
    }
    if (inputsArray[1].checked) {
        numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);
    }
    if (inputsArray[2].checked) {
        numbers = [...Array(24).keys()].sort(() => Math.random() - 0.5);
    }
    if (inputsArray[3].checked) {
        numbers = [...Array(35).keys()].sort(() => Math.random() - 0.5);
    }
    if (inputsArray[4].checked) {
        numbers = [...Array(48).keys()].sort(() => Math.random() - 0.5);
    }
    if (inputsArray[5].checked) {
        numbers = [...Array(63).keys()].sort(() => Math.random() - 0.5);
    }

    cells = [];
    empty.top = 0;
    empty.left = 0;
    cells.push(empty);
    if (inputsArray[0].checked) {
        for (let i = 1; i <=8; i++) {
            const cell = document.createElement('div');
            cell.style.width = `${320/3}px`;
            cell.style.height = `${320/3}px`;
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
            const left = i % 3;
            const top = (i - left) / 3;
            cells.push({
                value: value,
                left: left,
                top: top,
                element: cell
            });
            cell.style.top = `${top * cellSize}px`;
            cell.style.left = `${left * cellSize}px`;
            field.append(cell);
            cell.onclick = () => {
                move(i);
                moves.innerHTML = `Moves: ${counter}`;
            }
        }
    }
    if (inputsArray[1].checked) {
        for (let i = 1; i <=15; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
            const left = i % 4;
            const top = (i - left) / 4;
            cells.push({
                value: value,
                left: left,
                top: top,
                element: cell
            });
            cell.style.top = `${top * cellSize}px`;
            cell.style.left = `${left * cellSize}px`;
            field.append(cell);
            cell.onclick = () => {
                move(i);
                moves.innerHTML = `Moves: ${counter}`;
            }
        }
    }
    if (inputsArray[2].checked) {
        for (let i = 1; i <=24; i++) {
            const cell = document.createElement('div');
            cell.style.width = `${320/5}px`;
            cell.style.height = `${320/5}px`;
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
            const left = i % 5;
            const top = (i - left) / 5;
            cells.push({
                value: value,
                left: left,
                top: top,
                element: cell
            });
            cell.style.top = `${top * cellSize}px`;
            cell.style.left = `${left * cellSize}px`;
            field.append(cell);
            cell.onclick = () => {
                move(i);
                moves.innerHTML = `Moves: ${counter}`;
            }
        }
    }
    if (inputsArray[3].checked) {
        for (let i = 1; i <=35; i++) {
            const cell = document.createElement('div');
            cell.style.width = `${320/6 + 0.01}px`;
            cell.style.height = `${320/6 + 0.01}px`;
            cell.style.fontSize = '26px';
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
            const left = i % 6;
            const top = (i - left) / 6;
            cells.push({
                value: value,
                left: left,
                top: top,
                element: cell
            });
            cell.style.top = `${top * cellSize}px`;
            cell.style.left = `${left * cellSize}px`;
            field.append(cell);
            cell.onclick = () => {
                move(i);
                moves.innerHTML = `Moves: ${counter}`;
            }
        }
    }
    if (inputsArray[4].checked) {
        for (let i = 1; i <=48; i++) {
            const cell = document.createElement('div');
            cell.style.width = `${320/7}px`;
            cell.style.height = `${320/7}px`;
            cell.style.fontSize = '22px';
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
            const left = i % 7;
            const top = (i - left) / 7;
            cells.push({
                value: value,
                left: left,
                top: top,
                element: cell
            });
            cell.style.top = `${top * cellSize}px`;
            cell.style.left = `${left * cellSize}px`;
            field.append(cell);
            cell.onclick = () => {
                move(i);
                moves.innerHTML = `Moves: ${counter}`;
            }
        }
    }
    if (inputsArray[5].checked) {
        for (let i = 1; i <=63; i++) {
            const cell = document.createElement('div');
            cell.style.width = `${320/8}px`;
            cell.style.height = `${320/8}px`;
            cell.style.fontSize = '20px';
            cell.className = 'cell';
            const value = numbers[i - 1] + 1;
            cell.innerHTML = value;
            const left = i % 8;
            const top = (i - left) / 8;
            cells.push({
                value: value,
                left: left,
                top: top,
                element: cell
            });
            cell.style.top = `${top * cellSize}px`;
            cell.style.left = `${left * cellSize}px`;
            field.append(cell);
            cell.onclick = () => {
                move(i);
                moves.innerHTML = `Moves: ${counter}`;
            }
        }
    }

}

window.addEventListener('load', () => {
    if (inputsArray[0].checked) empty.value = 9;
    if (inputsArray[1].checked) empty.value = 16;
    if (inputsArray[2].checked) empty.value = 25;
    if (inputsArray[3].checked) empty.value = 36;
    if (inputsArray[4].checked) empty.value = 49;
    if (inputsArray[5].checked) empty.value = 64;
    createPuzzle();
});
startButton.onclick = () => {
    counter = 0;
    moves.innerHTML = `Moves: ${counter}`
    field.innerHTML = '';
    createPuzzle();
    
    //time.innerHTML = `Time: ${minutes}:${seconds}`
}





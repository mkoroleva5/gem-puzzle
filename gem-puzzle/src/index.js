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

const cellSize = 80;

const empty = {
    value: 16,
    top: 0,
    left: 0
}

let counter = 0;
let cells;

const move = (index) => {
    const cell = cells[index];
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }

    const audio = document.createElement('audio');
    field.appendChild(audio);
    audio.innerHTML = 'src="../src/assets/75305337ef8f53f.mp3"';
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
        return cell.value === cell.top * 4 + cell.left + 1; 
    })
    
    if (victory) {
        setTimeout(() => {
            alert(`Hooray! You solved the puzzle in ##:## and ${counter} moves`);
        }, 330)
        
    }
}

const createPuzzle = () => {
    let numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);
    cells = [];
    empty.top = 0;
    empty.left = 0;
    cells.push(empty);
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
    /*
        if (cell.innerHTML === '0') {
            empty.top = parseInt(cell.style.top) / 80;
            empty.left = parseInt(cell.style.left) / 80;
            cell.style.border = 'none';
            cell.style.opacity = '0'
        } 
        */
        field.append(cell);
        
        cell.onclick = () => {
            move(i);
            moves.innerHTML = `Moves: ${counter}`;
        }
        
    }
}

window.onload = createPuzzle();
startButton.onclick = () => {
    counter = 0;
    moves.innerHTML = `Moves: ${counter}`
    field.innerHTML = '';
    createPuzzle();
    
    //time.innerHTML = `Time: ${minutes}:${seconds}`
}





import "./styles/index.css"

let box = document.createElement('div');
box.className = 'box';
document.body.append(box);

let buttonsWrapper = document.createElement('div');
buttonsWrapper.className = 'buttons-wrapper';
let statsWrapper = document.createElement('div');
statsWrapper.className = 'stats-wrapper';

let resultsWrapper = document.createElement('div');
resultsWrapper.className = 'results-wrapper';
let resultsBox = document.createElement('div');
resultsBox.className = 'results-box';
let resultsItem = document.createElement('div');
resultsItem.className = 'results-item';
let closeResultsButton = document.createElement('img');
closeResultsButton.className = 'close-results-button';
import closeImg from '/assets/close.png';
closeResultsButton.setAttribute('src', closeImg);

box.append(buttonsWrapper, statsWrapper, resultsWrapper);
resultsWrapper.append(resultsBox);
resultsBox.append(closeResultsButton);

for (let i = 0; i < 10; i++) {
    resultsBox.innerHTML += '<div class="results-item"></div>';
}

let startButton = document.createElement('button');
startButton.className = 'button start-button';
startButton.innerHTML = 'Shuffle and start';

let stopButton = document.createElement('button');
stopButton.className = 'button stop-button';
stopButton.innerHTML = 'Stop';

let saveButton = document.createElement('button');
saveButton.className = 'button save-button';
saveButton.innerHTML = 'Save';

let loadButton = document.createElement('button');
loadButton.className = 'button load-button';
loadButton.innerHTML = 'Load';

let resultsButton = document.createElement('button');
resultsButton.className = 'button results-button';
resultsButton.innerHTML = 'Results';

import unmutedImg from '/assets/unmuted.png';
import mutedImg from '/assets/muted.png';
let muteButton = document.createElement('button');
muteButton.className = 'button mute-button';
let muteButtonImg = document.createElement('img');
muteButtonImg.setAttribute('src', unmutedImg);
muteButtonImg.style.width = '17px';
muteButtonImg.style.height = '17px';

buttonsWrapper.append(startButton, stopButton, saveButton, loadButton, resultsButton, muteButton);
muteButton.append(muteButtonImg);

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

if(inputsArray[1].checked && 
    !localStorage.getItem('input1-checked') && 
    !localStorage.getItem('input2-checked') && 
    !localStorage.getItem('input3-checked') &&
    !localStorage.getItem('input4-checked') &&
    !localStorage.getItem('input5-checked') &&
    !localStorage.getItem('input6-checked')) {
        localStorage.setItem(`input1-checked`, 'false');
        localStorage.setItem(`input2-checked`, 'true');
        localStorage.setItem(`input3-checked`, 'false');
        localStorage.setItem(`input4-checked`, 'false');
        localStorage.setItem(`input5-checked`, 'false');
        localStorage.setItem(`input6-checked`, 'false');
        labelsArray[1].style.border = '3px solid #829bd6';
        labelsArray[1].style.borderRadius = '10px';
        labelsArray[1].style.color = '#8ce068';
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

import audioClickSource from '/assets/75305337ef8f53f.mp3';
const audioClick = new Audio(audioClickSource);

import audioWinSource from '/assets/goodresult-82807.mp3';
const audioWin = new Audio(audioWinSource);

const startButtonGreen = () => {
    startButton.style.border = '3px solid #ace494';
    startButton.style.color = '#9bdf7e';
};
const startButtonBlue = () => {
    startButton.style.border = '3px solid #829bd6';
    startButton.style.color = '#829bd6';
};
const stopButtonGreen = () => {
    stopButton.style.border = '3px solid #ace494';
    stopButton.style.color = '#9bdf7e';
};
const stopButtonRed = () => {
    stopButton.style.border = '3px solid #f9906a';
    stopButton.style.color = '#f9906a';
};
const saveButtonGreen = () => {
    saveButton.style.border = '3px solid #ace494';
    saveButton.style.color = '#9bdf7e';
};
const saveButtonYellow = () => {
    saveButton.style.border = '3px solid #f5cd2e';
    saveButton.style.color = '#f5cd2e';
};
const loadButtonBlue = () => {
    loadButton.style.border = '3px solid #829bd6';
    loadButton.style.color = '#829bd6';
};

let results;
let victory;
let cell;
let emptyCell;

// -----MOVING CELLS-----

const move = (index) => {
    empty.value = Math.floor(300/cellSize)*Math.floor(300/cellSize);
    startButtonGreen();
    stopButtonRed();
    saveButtonYellow();
    if (stopButton.innerHTML === 'Play') {
        stopButtonRed();
        clearInterval(interval);
        startTimer();
        stopButton.innerHTML = 'Stop';
    }
    if (counter === 0 && time.innerHTML === 'Time: 00:00') {
        clearInterval(interval);
        startTimer();
    }
    cell = cells[index];
    const leftDiff = Math.abs(empty.left - cell.left);
    const topDiff = Math.abs(empty.top - cell.top);

    if (leftDiff + topDiff > 1) {
        return;
    }
    
    audioClick.play();
    cell.element.style.top = `${empty.top * cellSize}px`;
    cell.element.style.left = `${empty.left * cellSize}px`;
    const emptyLeft = empty.left;
    const emptyTop = empty.top;
    empty.left = cell.left;
    empty.top = cell.top;
    cell.left = emptyLeft;
    cell.top = emptyTop;
    counter++; 
    moves.innerHTML = `Moves: ${counter}`; 
    emptyCell.style.top = `${empty.top*cellSize}px`;
    emptyCell.style.left = `${empty.left*cellSize}px`;
    emptyCell.style.width = `${cellSize}px`;
    emptyCell.style.height = `${cellSize}px`;

    victory = cells.every(cell => {
        return cell.value === cell.top * Math.floor(300/cellSize) + cell.left + 1;  
    });
    if (victory) {
        startButtonBlue();
        saveButtonGreen();
        stopButtonGreen();
        audioWin.play();
        setTimeout(() => { 
            field.innerHTML = `<div class="victory">Hooray!<br><br>You solved<br>the puzzle<br>in ${time.innerHTML.replace('Time: ', '')}<br>and ${counter} moves</div>`;
        }, 500);
        clearInterval(interval);
        if (!results) {
            results = [];
            results.push({
                resultsFieldSize: `${Math.floor(300/cellSize)}x${Math.floor(300/cellSize)}`,
                moves: counter,
                time: time.innerHTML.replace('Time: ', ''),
                speed: counter/(sec + min * 60)
            });
        } else {
            results.push({
                resultsFieldSize: `${Math.floor(300/cellSize)}x${Math.floor(300/cellSize)}`,
                moves: counter,
                time: time.innerHTML.replace('Time: ', ''),
                speed: counter/(sec + min * 60)
            });
            results.sort((a, b) => b.resultsFieldSize[0] - a.resultsFieldSize[0] || a.moves - b.moves ||
                (+`${a.time[0]}${a.time[1]}`*60 + +`${a.time[3]}${a.time[4]}`) - (+`${b.time[0]}${b.time[1]}`*60 + +`${b.time[3]}${b.time[4]}`));
        }
        localStorage.setItem('results', JSON.stringify(results));

        let resultsItemsArray = document.querySelectorAll('.results-item');
        for (let i = 0; i < results.length; i++) {
            if (i < 10) {
                resultsItemsArray[i].innerHTML = `${i+1}. ${results[i].resultsFieldSize} - ${results[i].moves} moves - time: ${results[i].time}`;
            }
        }
    }
}

// -----DRAG AND DROP-----

const dragAndDrop = () => {
    cell.setAttribute('draggable', 'true');
    emptyCell.ondragover = allowDrop;
    function allowDrop(event) {
        event.preventDefault();
    }
    
    cell.ondragstart = drag;
    function drag(event) {
        event.dataTransfer.setData('id', event.target.id);        
    }

    emptyCell.ondrop = drop;
    function drop(event) {
        empty.value = Math.floor(300/cellSize)*Math.floor(300/cellSize);
        startButtonGreen();
        stopButtonRed();
        saveButtonYellow();
        if (stopButton.innerHTML === 'Play') {
            stopButtonRed();
            clearInterval(interval);
            startTimer();
            stopButton.innerHTML = 'Stop';
        }
        if (counter === 0 && time.innerHTML === 'Time: 00:00') {
            clearInterval(interval);
            startTimer();
        } 

        let cellId = event.dataTransfer.getData('id');
        cell = cells.find(el => el.value == cellId);
            
        const leftDiff = Math.abs(empty.left - cell.left);
        const topDiff = Math.abs(empty.top - cell.top);
        if (leftDiff + topDiff > 1) {
            return;
        }
            
        audioClick.play();
        cell.element.style.top = `${empty.top * cellSize}px`;
        cell.element.style.left = `${empty.left * cellSize}px`;
        const emptyLeft = empty.left;
        const emptyTop = empty.top;
        empty.left = cell.left;
        empty.top = cell.top;
        cell.left = emptyLeft;
        cell.top = emptyTop;
        counter++; 
        moves.innerHTML = `Moves: ${counter}`;
        emptyCell.style.top = `${empty.top*cellSize}px`;
        emptyCell.style.left = `${empty.left*cellSize}px`;
        emptyCell.style.width = `${cellSize}px`;
        emptyCell.style.height = `${cellSize}px`;

        victory = cells.every(cell => {
            return cell.value === cell.top * Math.floor(300/cellSize) + cell.left + 1;  
        });
        if (victory) {
            startButtonBlue();
            stopButtonGreen();
            saveButtonGreen();
            audioWin.play();
            setTimeout(() => { 
                field.innerHTML = `<div class="victory">Hooray!<br><br>You solved<br>the puzzle<br>in ${time.innerHTML.replace('Time: ', '')}<br>and ${counter} moves</div>`;
            }, 500);
            clearInterval(interval);
            if (!results) {
                results = [];
                results.push({
                    resultsFieldSize: `${Math.floor(300/cellSize)}x${Math.floor(300/cellSize)}`,
                    moves: counter,
                    time: time.innerHTML.replace('Time: ', ''),
                    speed: counter/(sec + min * 60)
                });
            } else {
                results.push({
                    resultsFieldSize: `${Math.floor(300/cellSize)}x${Math.floor(300/cellSize)}`,
                    moves: counter,
                    time: time.innerHTML.replace('Time: ', ''),
                    speed: counter/(sec + min * 60)
                });
                results.sort((a, b) => b.resultsFieldSize[0] - a.resultsFieldSize[0] || a.moves - b.moves ||
                    (+`${a.time[0]}${a.time[1]}`*60 + +`${a.time[3]}${a.time[4]}`) - (+`${b.time[0]}${b.time[1]}`*60 + +`${b.time[3]}${b.time[4]}`));
            }
            localStorage.setItem('results', JSON.stringify(results));
            let resultsItemsArray = document.querySelectorAll('.results-item');
            for (let i = 0; i < results.length; i++) {
                if (i < 10) {
                    resultsItemsArray[i].innerHTML = `${i+1}. ${results[i].resultsFieldSize} - ${results[i].moves} moves - time: ${results[i].time}`;
                }
            }
        }
    }
}

// -----GENERATING NEW GAME-----

const createPuzzle = () => {
    let numbers;
    cells = [];
    empty.top = 0;
    empty.left = 0;
    empty.value = Math.floor(300/cellSize)*Math.floor(300/cellSize);
    cells.push(empty);
    for (let j = 0; j < 6; j++) {
        if (inputsArray[j].checked) {
            cellSize = 300/(j + 3);

            numbers = [...Array((j + 3)*(j + 3) - 1).keys()].sort(() => Math.random() - 0.5);

            function countInversions(numbers) {
                let x = 0;
                for (let a = 0; a < numbers.length; a++) {
                    const cur = numbers.filter((el, ind) => {
                        return el < numbers[a] + 1 && ind > a;
                    }).length;
                    x += cur;
                } 
                return j % 2 === 0? x : x + 1;      
            }

            if (!countInversions(numbers)) countInversions();
            while (countInversions(numbers) % 2 !== 0) {
                numbers = [...Array((j + 3)*(j + 3) - 1).keys()].sort(() => Math.random() - 0.5);
                countInversions(numbers);
            }
            
            for (let i = 1; i <= (j + 3)*(j + 3) - 1; i++) {
                cell = document.createElement('div');
                cell.style.zIndex = '2';
                cell.style.width = `${300/(j + 3)}px`;
                cell.style.height = `${300/(j + 3)}px`;
                if (j === 3) {
                    cell.style.width = `${300/(j + 3) + 0.01}px`;
                    cell.style.height = `${300/(j + 3) + 0.01}px`;
                    cell.style.fontSize = '26px';
                }
                if (j === 4) {
                    cell.style.fontSize = '22px';
                    cell.style.border = '4px solid #829bd6';
                }
                if (j === 5) {
                    cell.style.fontSize = '20px';
                    cell.style.border = '4px solid #829bd6';
                }
                cell.className = 'cell';
                const value = numbers[i - 1] + 1;
                cell.innerHTML = value;
                cell.setAttribute('id', `${value}`);
                const left = i % (j + 3);
                const top = (i - left) / (j + 3);
                cells.push({
                    value: value,
                    left: left,
                    top: top,
                    element: cell
                });

                cell.style.top = `${top * cellSize}px`;
                cell.style.left = `${left * cellSize}px`;                
                field.append(cell);

                emptyCell = document.createElement('div');
                emptyCell.style.position = 'absolute';
                emptyCell.style.top = `${empty.top*cellSize}px`;
                emptyCell.style.left = `${empty.left*cellSize}px`;
                emptyCell.style.width = `${cellSize}px`;
                emptyCell.style.height = `${cellSize}px`;
                field.append(emptyCell);

                cell.addEventListener('click', () => {
                    move(i);
                });
                dragAndDrop();             
            }
            saveButton.addEventListener('click', () => {
                localStorage.setItem('state', JSON.stringify(cells));
                localStorage.setItem('moves', counter);
                localStorage.setItem('time', time.innerHTML);
                localStorage.setItem('seconds', sec);
                localStorage.setItem('minutes', min);
                if (hour) localStorage.setItem('hours', hour);
                loadButtonBlue();
                localStorage.setItem('field-size', Math.sqrt(cells.length));
            });
        }
    } 
}

// -----LOADING SAVED GAME-----

let state;
const loadPuzzle = () => {
    field.innerHTML = '';
    cells = [];
    empty.top = JSON.parse(localStorage.getItem('state'))[0].top;
    empty.left = JSON.parse(localStorage.getItem('state'))[0].left;
    empty.value = Math.floor(300/cellSize)*Math.floor(300/cellSize);
    cells.push(empty);
    const fieldSize = localStorage.getItem('field-size');
    for (let i = 0; i < 6; i++) {
        labelsArray[i].style.border = 'none';
        labelsArray[i].style.color = '#829bd6';
        localStorage.setItem(`input${i+1}-checked`, 'false');
        inputsArray[i].checked = false;
        inputsArray[fieldSize - 3].checked = true;
        labelsArray[fieldSize - 3].style.border = '3px solid #829bd6';
        labelsArray[fieldSize - 3].style.borderRadius = '10px';
        labelsArray[fieldSize - 3].style.color = '#8ce068';
        localStorage.setItem(`input${i+1}-checked`, 'false');
        localStorage.setItem(`input${fieldSize - 3 + 1}-checked`, 'true');
    }
    cellSize = 300/(fieldSize);
    for (let i = 1; i <= (fieldSize)*(fieldSize) - 1; i++) {
        cell = document.createElement('div');
        cell.style.width = `${300/(fieldSize)}px`;
        cell.style.height = `${300/(fieldSize)}px`;
        if (fieldSize === '6') {
            cell.style.width = `${300/(fieldSize) + 0.01}px`;
            cell.style.height = `${300/(fieldSize) + 0.01}px`;
            cell.style.fontSize = '26px';
        }
        if (fieldSize === '7') {
            cell.style.fontSize = '22px';
            cell.style.border = '4px solid #829bd6';
        }
        if (fieldSize === '8') {
            cell.style.fontSize = '20px';
            cell.style.border = '4px solid #829bd6';
        }
        cell.className = 'cell';
        const value = JSON.parse(localStorage.getItem('state'))[i].value;
        cell.innerHTML = value;
        cell.setAttribute('id', `${value}`);
        const left = JSON.parse(localStorage.getItem('state'))[i].left;
        const top = JSON.parse(localStorage.getItem('state'))[i].top;
        cells.push({
            value: value,
            left: left,
            top: top,
            element: cell
        });
        cell.style.top = `${top * cellSize}px`;
        cell.style.left = `${left * cellSize}px`;                
        field.append(cell);
        
        emptyCell = document.createElement('div');
        emptyCell.style.position = 'absolute';
        emptyCell.style.top = `${empty.top*cellSize}px`;
        emptyCell.style.left = `${empty.left*cellSize}px`;
        emptyCell.style.width = `${cellSize}px`;
        emptyCell.style.height = `${cellSize}px`;
        field.append(emptyCell);

        cell.addEventListener('click', () => {
            move(i);
        });
        dragAndDrop();
    }

    saveButton.addEventListener('click', () => {
        localStorage.setItem('state', JSON.stringify(cells));
        localStorage.setItem('moves', counter);
        localStorage.setItem('time', time.innerHTML);
        localStorage.setItem('seconds', sec);
        localStorage.setItem('minutes', min);
        if (hour) localStorage.setItem('hours', hour);
        loadButtonBlue();
        localStorage.setItem('field-size', Math.sqrt(cells.length));
    });
}

if (localStorage.getItem('state')) {
    loadButtonBlue();
}

window.addEventListener('load', () => {
    let resultsItemsArray = document.querySelectorAll('.results-item');
    results = JSON.parse(localStorage.getItem('results'));
    if (results) {
        results.sort((a, b) => b.resultsFieldSize[0] - a.resultsFieldSize[0] || a.moves - b.moves ||
        (+`${a.time[0]}${a.time[1]}`*60 + +`${a.time[3]}${a.time[4]}`) - (+`${b.time[0]}${b.time[1]}`*60 + +`${b.time[3]}${b.time[4]}`));
        for (let i = 0; i < results.length; i++) {
            if (i < 10) {
                resultsItemsArray[i].innerHTML = `${i+1}. ${results[i].resultsFieldSize} - ${results[i].moves} moves - time: ${results[i].time}`;
            }   
        }
    }
    createPuzzle();
    if (localStorage.getItem('volume') === 'off') {
        muteButtonImg.setAttribute ('src', mutedImg);
        muteButton.classList.add('mute');
        audioClick.muted = true;
        audioWin.muted = true;
    } else if (localStorage.getItem('volume') === 'on') {
        muteButtonImg.setAttribute ('src', unmutedImg);
        muteButton.classList.remove('mute');
        audioClick.muted = false;
        audioWin.muted = false;
    }
});


// -----STARTING GAME WITH TIMER AND MOVES-----

startButton.addEventListener('click', () => {
    counter = 0;
    sec = 0;
    min = 0;
    moves.innerHTML = `Moves: ${counter}`;
    field.innerHTML = '';
    startButtonGreen();
    stopButtonRed();
    stopButton.innerHTML = 'Stop';
    saveButtonYellow();
    createPuzzle();
});

let sec = 0;
let min = 0;
let hour = 0;
let interval;

function startTimer() {
    interval = setInterval(tick, 1000);
}

function tick() {
    sec++;
    if (sec >= 60) {
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) {
        if (min < 10) {
            if (hour < 10 && hour > 0) {
                time.innerHTML = 'Time: ' + '0' + hour + ':0' + min + ':0' + sec;
            } else if (hour >= 10) {
                time.innerHTML = 'Time: ' + hour + ':0' + min + ':0' + sec;
            } else if (hour === 0) {
                time.innerHTML = 'Time: ' + '0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10 && hour > 0) {
                time.innerHTML = 'Time: ' + '0' + hour + ':' + min + ':0' + sec;
            } else if (hour >= 10) {
                time.innerHTML = 'Time: ' + hour + ':' + min + ':0' + sec;
            } else if (hour === 0) {
                time.innerHTML = 'Time: ' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10 && hour > 0) {
                time.innerHTML = 'Time: ' + '0' + hour + ':0' + min + ':' + sec;
            } else if (hour >= 10) {
                time.innerHTML = 'Time: ' + hour + ':0' + min + ':' + sec;
            } else if (hour === 0) {
                time.innerHTML = 'Time: ' + '0' + min + ':' + sec;
            }
        } else {
            if (hour < 10 && hour > 0) {
                time.innerHTML = 'Time: ' + '0' + hour + ':' + min + ':' + sec;
            } else if (hour >= 10) {
                time.innerHTML = 'Time: ' + hour + ':' + min + ':' + sec;
            } else if (hour === 0) {
                time.innerHTML = 'Time: ' + min + ':' + sec;
            }
        }
    }    
}

startButton.addEventListener('click', () => {
    time.innerHTML = 'Time: 00:00';
    sec = 0;
    min = 0;
    hour = 0;
    clearInterval(interval);
    startTimer();
});

stopButton.addEventListener('click', () => {
    if (field.childNodes.length) {
        if (stopButton.innerHTML === 'Stop') {
            stopButtonGreen();
            clearInterval(interval);
            stopButton.innerHTML = 'Play';
        } else if (stopButton.innerHTML === 'Play') {
            stopButtonRed();
            clearInterval(interval);
            startTimer();
            stopButton.innerHTML = 'Stop';
        }  
    }
});

if (state) {
    loadButtonBlue();
}

loadButton.addEventListener('click', () => {
    state = JSON.parse(localStorage.getItem('state'));
    if (state) {
        loadPuzzle();
        startButtonGreen();
        stopButtonRed();
        stopButton.innerHTML = 'Stop';
        saveButtonYellow();
        counter = localStorage.getItem('moves');
        moves.innerHTML = `Moves: ${counter}`;
        time.innerHTML = localStorage.getItem('time');
        sec = localStorage.getItem('seconds');
        min = localStorage.getItem('minutes');
        if (hour) hour = localStorage.getItem('hours');
        clearInterval(interval);
        startTimer();
    }
})

muteButton.addEventListener('click', () => {
    if (!muteButton.classList.contains('mute')) {
        muteButtonImg.setAttribute ('src', mutedImg);
        muteButton.classList.add('mute');
        audioClick.muted = true;
        audioWin.muted = true;
        localStorage.setItem('volume', 'off');
    } else {
        muteButtonImg.setAttribute ('src', unmutedImg);
        muteButton.classList.remove('mute');
        audioClick.muted = false;
        audioWin.muted = false;
        localStorage.setItem('volume', 'on');
    }
});

resultsButton.addEventListener('click', () => {
    resultsWrapper.style.transform = 'translateY(0)';
})

window.addEventListener('click', (event) => {
    if (!event.composedPath().includes(resultsBox) && !event.composedPath().includes(resultsButton)) {
        resultsWrapper.style.transform = 'translateY(-100%)';
    }
});

let close = document.querySelector('.close-results-button')
close.addEventListener('click', () => {
    resultsWrapper.style.transform = 'translateY(-100%)';
});
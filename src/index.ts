import 'styles/index.css';
import { createGameModel } from 'models/GameModel';
import { createGameFieldView } from 'views/GameFieldView/GameFieldView';
import { createButtonsView } from 'views/ButtonViews/ButtonsView';
import { createResultsTableView } from 'views/ResultsTableView';
import { createGameStateView } from 'views/GameStateView/GameStateView';
import { createStartButtonController } from 'controllers/ButtonControllers/StartButtonController';
import { state } from 'store/store';
import { createStopButtonController } from 'controllers/ButtonControllers/StopButtonController';
import {
  createGameFieldController,
  updateCellsArray,
} from 'controllers/GameFieldController/GameFieldController';
import { createFieldSizesView } from 'views/FieldSizesView/FieldSizesView';
import { createFieldSizesController } from 'controllers/FieldSizesController/FieldSizesController';
import { createSaveButtonController } from 'controllers/ButtonControllers/SaveButtonController';
import { createLoadButtonController } from 'controllers/ButtonControllers/LoadButtonController';

const root = document.getElementById('root');

updateCellsArray();
const gridSize = state.gridSize;
const cellsArray = state.cellsArray;
const results = state.results;
const gameModel = createGameModel();

const buttonsView = createButtonsView(root);

const resultsTableView = createResultsTableView(root, results);
const gameStateView = createGameStateView(root);
const gameFieldView = createGameFieldView(root);
const fieldSizesView = createFieldSizesView(root);

gameModel.createField();

createFieldSizesController(fieldSizesView.sizesArray, () => {
  gameModel.createField();
  gameModel.startGame();
});

createStartButtonController(buttonsView.startButton, () => {
  gameModel.createField();
  gameModel.startGame();
});

createStopButtonController(
  buttonsView.stopButton,
  gameModel.stopGame,
  gameModel.resumeGame,
);

createSaveButtonController(buttonsView.saveButton);
createLoadButtonController(buttonsView.loadButton, gameModel.loadGame);
createGameFieldController(gameFieldView, gameModel.moveCell);

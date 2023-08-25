import 'styles/index.css';
import { createGameModel } from 'models/GameModel';
import { createGameFieldView } from 'views/GameFieldView/GameFieldView';
import { createButtonsView } from 'views/ButtonViews/ButtonsView';
import { createResultsTableView } from 'views/ResultsTableView';

const root = document.getElementById('root');
const gameModel = createGameModel();
const gridSize = gameModel.getState().gridSize;
const results = gameModel.getState().results;

const buttonsView = createButtonsView(root);
const gameField = createGameFieldView(root, gridSize);
const resultsTableView = createResultsTableView(root, results);
gameField.updateField();

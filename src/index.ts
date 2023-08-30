import 'styles/index.css';
import { createGameModel } from 'models/GameModel';
import { createGameFieldView } from 'views/GameFieldView/GameFieldView';
import { createButtonsView } from 'views/ButtonViews/ButtonsView';
import { createResultsTableView } from 'views/ResultsTableView/ResultsTableView';
import { createGameStateView } from 'views/GameStateView/GameStateView';
import { createStartButtonController } from 'controllers/ButtonControllers/StartButtonController';
import { createStopButtonController } from 'controllers/ButtonControllers/StopButtonController';
import { createGameFieldController } from 'controllers/GameFieldController/GameFieldController';
import { createFieldSizesView } from 'views/FieldSizesView/FieldSizesView';
import { createFieldSizesController } from 'controllers/FieldSizesController/FieldSizesController';
import { createSaveButtonController } from 'controllers/ButtonControllers/SaveButtonController';
import { createLoadButtonController } from 'controllers/ButtonControllers/LoadButtonController';
import { createResultButtonController } from 'controllers/ButtonControllers/ResultButtonController';
import { createResultsTableController } from 'controllers/ResultsTableController/ResultsTableController';
import { createMuteButtonController } from 'controllers/ButtonControllers/MuteButtonController';
import {
  createThemeButtonController,
  setBodyBackground,
} from 'controllers/ButtonControllers/ThemeButtonController';
import { state } from 'store/store';

const root = document.getElementById('root');

setBodyBackground(root, state.theme);

const gameModel = createGameModel();

const buttonsView = createButtonsView(root);

createGameStateView(root);
const resultsTableView = createResultsTableView(root);
const gameFieldView = createGameFieldView(root);
const fieldSizesView = createFieldSizesView(root);

gameModel.createField();

createFieldSizesController(fieldSizesView.sizesArray, () => {
  gameModel.createField();
  gameModel.startGame();
});
createStartButtonController(buttonsView.startButton, gameModel.startGame);
createStopButtonController(
  buttonsView.stopButton,
  gameModel.stopGame,
  gameModel.resumeGame,
);
createSaveButtonController(buttonsView.saveButton);
createLoadButtonController(buttonsView.loadButton, gameModel.loadGame);
createResultButtonController(buttonsView.resultsButton, gameModel.showResults);
createMuteButtonController(buttonsView.muteButton, gameModel.toggleSound);
createThemeButtonController(buttonsView.themeButton, gameModel.toggleTheme, root);
createGameFieldController(gameFieldView, gameModel.moveCell, gameModel.addResult);
createResultsTableController(
  resultsTableView.resultsWrapper,
  resultsTableView.closeResultsButton,
  gameModel.hideResults,
);

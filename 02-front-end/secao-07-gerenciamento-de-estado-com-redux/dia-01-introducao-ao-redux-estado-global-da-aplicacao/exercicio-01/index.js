import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';
const RANDOM_COLOR = 'RANDOM_COLOR';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const actionNextColor = { type: NEXT_COLOR };
const actionPreviousColor = { type: PREVIOUS_COLOR };
const actionRandomColor = { type: RANDOM_COLOR };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

    case RANDOM_COLOR:
      return {
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');
const randomBtn = document.querySelector('#random');

nextBtn.addEventListener('click', () => {
  store.dispatch(actionNextColor);
});

previousBtn.addEventListener('click', () => {
  store.dispatch(actionPreviousColor);
});

randomBtn.addEventListener('click', () => {
  store.dispatch(actionRandomColor);
});

store.subscribe(() => {
  const globalState = store.getState();

  const value = document.querySelector('#value');
  const container = document.querySelector('#container');

  value.innerHTML = globalState.colors[globalState.index];
  container.style.backgroundColor = globalState.colors[globalState.index];
});

import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const NEXT_COLOR = 'NEXT_COLOR';
const PREVIOUS_COLOR = 'PREVIOUS_COLOR';

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const actionNextColor = { type: NEXT_COLOR };
const actionPreviousColor = { type: PREVIOUS_COLOR };

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
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const nextBtn = document.querySelector('#next');
const previousBtn = document.querySelector('#previous');

nextBtn.addEventListener('click', () => {
  store.dispatch(actionNextColor);
});

previousBtn.addEventListener('click', () => {
  store.dispatch(actionPreviousColor);
});

store.subscribe(() => {
  const globalState = store.getState();

  const value = document.querySelector('#value');
  const container = document.querySelector('#container');

  value.innerHTML = globalState.colors[globalState.index];
  container.style.backgroundColor = globalState.colors[globalState.index];
});

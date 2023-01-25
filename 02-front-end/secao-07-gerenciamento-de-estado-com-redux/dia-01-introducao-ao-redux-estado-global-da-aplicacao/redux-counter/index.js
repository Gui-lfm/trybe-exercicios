import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const INITIAL_STATE = { count: 0 };
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const actionIncrease = { type: INCREMENT_COUNTER };

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === INCREMENT_COUNTER) {
    return { count: state.count + 1 };
  }
  return state;
};

const store = createStore(reducer, composeWithDevTools());

const increaseBtn = document.querySelector('button');

increaseBtn.addEventListener('click', () => {
  store.dispatch(actionIncrease);
});

store.subscribe(() => {
  const globalState = store.getState();
  const counter = document.querySelector('h2');

  counter.innerHTML = globalState.count;
});

import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

const SWITCH_STATUS = 'SWITCH_STATUS';
const SWITCH_THEME = 'SWITCH_THEME';

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

const actionSwitchStatus = { type: SWITCH_STATUS };
const actionSwitchTheme = { type: SWITCH_THEME };

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_STATUS:
      const newStatus = state.status === 'offline' ? 'online' : 'offline';
      return {
        ...state,
        status: newStatus,
      };
    case SWITCH_THEME:
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      return {
        ...state,
        theme: newTheme,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch(actionSwitchTheme);
});

statusButton.addEventListener('click', () => {
  store.dispatch(actionSwitchStatus);
});

store.subscribe(() => {
  const body = document.querySelector('body');
  const currentStatus = document.querySelector('#status');

  const { theme, status } = store.getState();

  if (theme === 'dark') {
    body.style.backgroundColor = '#333',
    body.style.color = 'white',
    themeButton.innerText = 'Light Mode';
  } else {
    body.style.backgroundColor = 'white',
    body.style.color = '#333',
    themeButton.innerText = 'Dark Mode';
  }

  if(status === 'offline') {
    currentStatus.textContent = 'Offline'
    statusButton.innerText = 'Ficar Online'
  } else {
    currentStatus.textContent = 'Online'
    statusButton.innerText = 'Ficar Offline'
  }
});

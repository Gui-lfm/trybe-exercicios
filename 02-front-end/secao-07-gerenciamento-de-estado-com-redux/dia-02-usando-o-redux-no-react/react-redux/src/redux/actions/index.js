export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const CLICK_COUNTER = 'CLICK_COUNTER';

export const actionCreator = (increment = 1) => ({
  type: INCREMENT_COUNTER,
  payload: increment,
});

export const clickCounter = () => ({
  type: CLICK_COUNTER,
});

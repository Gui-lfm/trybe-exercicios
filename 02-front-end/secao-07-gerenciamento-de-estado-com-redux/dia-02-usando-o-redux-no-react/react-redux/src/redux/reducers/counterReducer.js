import { INCREMENT_COUNTER, CLICK_COUNTER } from "../actions";

const INITIAL_STATE = {
  count: 0,
  clicks: 0,
};

function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case CLICK_COUNTER:
      return {
        ...state,
        clicks: state.clicks + 1,
      };
    default:
      return state;
  }
}

export default counterReducer;

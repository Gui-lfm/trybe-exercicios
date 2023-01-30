import { REQUEST_STARTED, REQUEST_SUCCESSFUL, REQUEST_FAILED } from '../actions';

const INITIAL_STATE = {
  character: '',
  isLoading: false,
  error: null
};

const gotReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        character: action.data[0],
        isLoading: false,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        error: action.payload.error,
        isLoading: false
      }
    default:
      return state;
  }
};

export default gotReducer;

import { REQUEST_API, GET_PICTURE } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  imgURL: '',
  defaultImg: true,
};

function catReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_API:
      return {
        ...state,
        isLoading: true,
        defaultImg: true,
      };
    case GET_PICTURE:
      return {
        ...state,
        isLoading: false,
        imgURL: action.payload,
        defaultImg: false,
      };
    default:
      return state;
  }
}

export default catReducer;

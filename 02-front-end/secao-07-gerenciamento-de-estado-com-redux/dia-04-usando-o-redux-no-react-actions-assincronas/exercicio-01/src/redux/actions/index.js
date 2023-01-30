export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (data) => ({
  type: REQUEST_SUCCESSFUL,
  data,
});

const requestFailed = (error) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export const fetchAPI = (charName) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const response = await fetch(
        `https://anapioficeandfire.com/api/characters?name=${charName}`
      );
      const data = await response.json();
      dispatch(requestSuccessful(data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

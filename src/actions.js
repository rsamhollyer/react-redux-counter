export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export const actionIncrement = () => async (dispatch) => {
  dispatch({
    type: INCREMENT,
  });
};

export const actionDecrement = () => async (dispatch) => {
  dispatch({
    type: DECREMENT,
  });
};

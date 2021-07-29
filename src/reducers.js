import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT } from './actions';

const defaultState = {
  count: 42,
};

export function counter(state = defaultState, action) {
  switch (action?.type) {
    case INCREMENT:
      return {
        count: (state.count += 1),
      };
    case DECREMENT:
      return {
        count: (state.count -= 1),
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  count: counter,
});

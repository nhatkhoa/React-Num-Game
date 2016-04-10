import ACTIONS from '../action-type';

export function increment() {
  return {
    type: ACTIONS.INCREMENT
  };
}

export function decrement() {
  return {
    type: ACTIONS.DECREMENT
  };
}

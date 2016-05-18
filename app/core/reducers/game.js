import {GAME_ACTION, ROOM_ACTION} from '../contants'

const shuffleNum = (o) => {
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

const initialState = {
  myNumbers: [],
  currentNumbers: shuffleNum(Array.from({length: 99}, (v, k) => k + 1)),
  top: 1
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GAME_ACTION.INIT:
      return {
        ...state,
        myNumbers: [],
      }
    case GAME_ACTION.PICK_NUMBER:{
      let {top, currentNumbers, myNumbers} = state;
      if (top === action.num) {
        const index = currentNumbers.indexOf(action.num);
        currentNumbers[index] = - currentNumbers[index] ;
        top = action.num + 1;
        myNumbers = [action.num, ...myNumbers];
      }
      return Object.assign({}, state, {
        myNumbers: myNumbers,
        currentNumbers: [...currentNumbers],
        top
      });
    }
    case GAME_ACTION.SHUFFLE: {
      const {currentNumbers} = state;
      const newNums = shuffleNum(currentNumbers);
      return Object.assign({}, state, {currentNumbers: [...newNums]});
    }
    default:
      return state;
      
  }
}

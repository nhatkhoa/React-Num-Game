import {COMMON_ACTION} from '../contants'

const initialState = {
  isLoading: false
}
export default (state = initialState, {type, rooms, isLoading}) => {
  switch (type) {
    case COMMON_ACTION.TONGLE_LOADING:
      return Object.assign({}, state, {
        isLoading: (isLoading !== undefined) ? isLoading : !state.isLoading
      });
    default:
      return state
  }
}

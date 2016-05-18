import {ROOM_ACTION} from '../contants'

export default (state = {}, {type, rooms}) => {
  switch (type) {
    case ROOM_ACTION.INIT:
      return Object.assign({}, state, rooms);
    default:
      return state
  }
}

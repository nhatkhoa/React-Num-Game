import {GAME_ACTION, ROOM_ACTION, COMMON_ACTION} from './contants'
import Firebase from 'firebase'

const server = new Firebase('https://radiant-inferno-8130.firebaseio.com/message_list');
const rooms = new Firebase('https://radiant-inferno-8130.firebaseio.com/rooms');

export const initial = () => {
  console.log("INIT GAME");
  return {
    type: GAME_ACTION.INIT,
  }
}

export const pickNumber = (num = 0) => {
  console.log("PICK NUMBER", num);
  return {
    type: GAME_ACTION.PICK_NUMBER,
    num
  }
}

export const shuffle = () => {
  return {
    type: GAME_ACTION.SHUFFLE
  }
}

export const initRoom = (rooms) => {
  return {
    type: ROOM_ACTION.INIT,
    rooms
  }
}
export const addRoom = () => {
  return {
    type: ROOM_ACTION.ADD
  }
}

export const createRoom = () => {
  return (dispatch) => {
    dispatch(tongleLoading(true));
    rooms.push({username: 'khoa ' + new Date()}, () => {
      dispatch(addRoom);
      dispatch(tongleLoading(false));
    })
  }
}

export const tongleLoading = (isLoading) => {
  return {
    type: COMMON_ACTION.TONGLE_LOADING,
    isLoading
  }
}

export const fetchRooms = () => {
  return (dispatch) => {
    dispatch(tongleLoading(true));
    rooms.on('value', (snapshort) => {
      dispatch(initRoom(snapshort.val()));
      dispatch(tongleLoading(false));
    });
  }
}

export ACTIONS = {
  ON_MESSAGE:"ON_MESSAGE",
  SEND_MESSAGE: "SEND_MESSAGE",
}

export function onMessage(actions, message){
  console.log("RECEIVE", actions, message);
  return {
    type: ACTIONS.ON_MESSAGE,
    message
  }
}

export function sendMessage(actions, message){
  console.log("SEND_MESSAGE", actions, message);
  return {
    type: ACTIONS.SEND_MESSAGE,
    message
  }
}

export default function messageReducer(state = {}, action = {}){
  switch (action.type) {
    case ACTIONS.ON_MESSAGE : return
      
      break;
    default:
      return state;
  }
}

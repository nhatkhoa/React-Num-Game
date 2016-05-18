import {Scene, Actions, Reducer} from 'react-native-router-flux'
import React from 'react-native'
import Home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'
import Room from '../views/room'

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        return defaultReducer(state, action);
    }
};

const scenes = Actions.create(
  <Scene key="root">
      <Scene key="home" component={Home} hideNavBar/>
      <Scene key="login" component={Login}  title="Login" duration={1} />
      <Scene key="register" component={Register} title="Register" duration={1} />
      <Scene key="room" component={Room} hideNavBar initial={true} />
  </Scene>
);

export default scenes;

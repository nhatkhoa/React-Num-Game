import {Scene, Actions, Reducer} from 'react-native-router-flux'
import React from 'react-native'
import Home from '../views/home'
import Login from '../views/login'
import Register from '../views/register'

const reducerCreate = params => {
    const defaultReducer = Reducer(params);
    return (state, action) => {
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

const scenes = Actions.create(
  <Scene key="root">
      <Scene key="home" component={Home}  initial={true} title="Home" />
      <Scene key="login" component={Login}  title="Login" duration={1} />
      <Scene key="register" component={Register} title="Register" duration={1} />
  </Scene>
);

export default scenes;

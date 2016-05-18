import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, {Component} from 'react'
import {Reducer, Router} from 'react-native-router-flux'
import scenes from './core/router'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './core/reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Router scenes={scenes}/>
      </Provider>
    )
  }
}

export default App;

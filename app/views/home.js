import {StyleSheet, View, Text, Dimensions} from 'react-native';
import React, {Component} from 'react'
import Button from 'react-native-button'
import Board from '../components/board'
import Person from '../components/person'
import connectRedux from '../core/connect-redux'

const WINDOW_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  topNumber: {
    backgroundColor:'red'
  }
});

class HomeView extends Component{

  render() {
    const {myNumbers, top} = this.props.game;
    
    return (
      <View>
        <Text/>
        <Person {...this.props} />
        <Board {...this.props}/>
        <Person {...this.props} />
      </View>
    );
  }
}

export default connectRedux(HomeView);

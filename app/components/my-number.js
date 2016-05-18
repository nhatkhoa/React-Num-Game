import React, {Component} from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import {View, Text } from 'react-native-animatable'

const size = Dimensions.get('window').width/6;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size
  },
  top: {
    color: 'black',
    fontSize: size/2-7,
    fontWeight: 'bold'
  }
});

export default class myNumber extends Component {
  
  componentDidUpdate() {
    this.refs.container.rubberBand();
    this.refs.top.tada();
  }
  
  shouldComponentUpdate(nextProps, nextState) { 
    return nextProps.game.myNumbers.length !== this.props.game.myNumbers.length;
  }
  
  render(){
    const {myNumbers} = this.props.game;
    
    return(
      <View style={styles.container} ref='container'>
        <Text ref='top' style={styles.top}>
          {myNumbers.length}
        </Text>
      </View>
    );
  }
}

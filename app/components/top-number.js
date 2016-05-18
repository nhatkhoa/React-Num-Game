import React, {Component} from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import {View, Text } from 'react-native-animatable'

const size = Dimensions.get('window').width/5;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: '#fa6900',
    width: size,
    height: size,
    margin: 0
  },
  top: {
    color: '#e0e4cc',
    fontSize: size/2,
    fontWeight: 'bold'
  }
});

export default class TopNumber extends Component {
  
  componentDidUpdate() {
    this.refs.container.rubberBand();
    this.refs.top.tada();
  }
  
  shouldComponentUpdate(nextProps, nextState) { 
    return nextProps.game.top !== this.props.game.top;
  }
  render(){
    const {top} = this.props.game;
    
    return(
      <View style={styles.container} ref='container'>
        <Text ref='top' style={styles.top}>
          {top}
        </Text>
      </View>
    );
  }
}

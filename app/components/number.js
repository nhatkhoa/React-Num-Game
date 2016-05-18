import React, {Component} from 'react'
import {StyleSheet, Dimensions, TouchableNativeFeedback} from 'react-native'
import {View, Text } from 'react-native-animatable'

const size = Dimensions.get('window').width/7;

const styles = StyleSheet.create({
  container: {
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.5,
    borderWidth: 4,
    borderColor: '#ff9f54',
    overflow: 'hidden',
    backgroundColor: '#f38630',
    width: size,
    height: size
  },
  number: {
    color: '#e0e4cc',
    fontSize: size/2.6
  },
  disabled: {
    color: '#fa6900',
    fontSize: size/2.6, 
  }
});

export default class Number extends Component {
  
  componentDidUpdate() {
    this.refs.num.zoomIn();
  }
  
  onPress() {
    const {number, actions} = this.props;
    actions.shuffle();
    actions.pickNumber(number);
  }
  
  render(){
    const {number , actions} = this.props;
    
    return(
      <TouchableNativeFeedback ref='container' onPress={this.onPress.bind(this)}>
        <View style={styles.container}>
          <Text
            ref='num'
            animation="zoomIn"
            delay={number * 5}
            duration={150}
            style={number < 0 ? styles.disabled : styles.number}>
            {Math.abs(number)}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

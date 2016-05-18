import React, {Component} from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import {View, Text } from 'react-native-animatable'
import TopNumber from './top-number'
import MyNumber from './my-number'

const size = Dimensions.get('window').width/6;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 52
  } 
});

export default class Person extends Component {
  
  render(){
    const {myNumbers} = this.props.game;
    
    return(
      <View style={styles.container} ref='container'>
        <MyNumber {...this.props}/>
        <TopNumber {...this.props}/>
      </View>
    );
  }
}

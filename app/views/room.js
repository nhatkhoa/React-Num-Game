import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import React, {Component} from 'react'
import connectRedux from '../core/connect-redux'
import Room from '../components/room'
import ActionButtonFLoating from '../components/action-button'
import GiftedSpinner from 'react-native-gifted-spinner'
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatButton: {
    margin: 10
  }, 
  loader: {
    marginTop: HEIGHT/2 - 30,
    marginLeft: WIDTH/2 - 30,
    position:'absolute'
  }
});

class RoomView extends Component{
  render(){
    const {isLoading} = this.props;
    return (
      <View style={styles.container}>
        {isLoading ? <GiftedSpinner style={styles.loader} /> : null }
        <ScrollView style={styles.container}>
          <Room {...this.props}/>
        </ScrollView>
        <ActionButtonFLoating {...this.props}/>
      </View>
    )
  }
}

export default connectRedux(RoomView);

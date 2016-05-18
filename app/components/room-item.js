import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native'

const styles = StyleSheet.create({
  item: {
    padding: 5
    }
});

class Room extends Component {
  render () {
    const {room} = this.props;
    return (
      <TouchableNativeFeedback>
        <View style={styles.item}>
          <Text>{room.username}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

export default Room;

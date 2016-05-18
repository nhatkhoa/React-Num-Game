import React, {Component} from 'react'
import {View, Text} from 'react-native'
import ActionButton from 'react-native-action-button'

class ActionButtonFLoating extends Component {
  render () {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => this.props.actions.createRoom()}>
          <Text>N</Text>
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
          <Text>K</Text>
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
          <Text>K</Text>
        </ActionButton.Item>
      </ActionButton>
    )
  }
}

export default ActionButtonFLoating;

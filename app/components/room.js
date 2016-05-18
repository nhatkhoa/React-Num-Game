import React, {Component} from 'react'
import {View, Text, ListView, StyleSheet, TouchableNativeFeedback} from 'react-native'
import RoomItem from './room-item'
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    }
});

class Room extends Component {
  componentDidMount(){
    this.props.actions.fetchRooms();
  }
  
  render () {
    const {rooms} = this.props;
    const dataSource = ds.cloneWithRows(rooms);
    const renderItem = (room) => <RoomItem room={room}/>
    
    return (
      <ListView
        contentContainerStyle={styles.list}
        initialListSize={36}
        dataSource={dataSource}
        renderRow={renderItem}
      />
    )
  }
}

export default Room;

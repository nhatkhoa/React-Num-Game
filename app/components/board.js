import React, {Component} from 'react'
import {View, Text, ListView, StyleSheet} from 'react-native'
import Number from './number'

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const styles = StyleSheet.create({
  list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10
    },
});

class Board extends Component {
  render () {
    const {currentNumbers, myNumbers} = this.props.game;
    const dataSource = ds.cloneWithRows(currentNumbers.slice(0,36));
    const renderItem = (number) => <Number number={number} {...this.props}/>;
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

export default Board;

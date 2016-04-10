import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as counterActions from '../core/actions/counter';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class HomeView extends Component{
  render(){
    // const ColoredRaisedButton = MKButton.coloredButton()
    //   .withText('BUTTON')
    //   .withOnPress(() => console.log("Hi, it's a colored button!"))
    //   .build();
    //   
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Nice Man!
        </Text>
      </View>
    )
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(HomeView);

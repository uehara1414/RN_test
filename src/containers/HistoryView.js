import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Button, Image, Text, View, ScrollView} from 'react-native';
import ActionButton from 'react-native-action-button';
import {addCount} from '../firebase'
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Actions,
} from 'react-native-router-flux';


class HistoryView extends React.Component {

  render() {
    const state = this.props.state;
    console.log('s', state)
    let textList = [];
    Object.keys(state.status).forEach((key) => {
      textList.push(<Text>{state.status[key].text}</Text>)
    })

    return (
      <View style={styles.container}>
        <ScrollView>
          {textList}
        </ScrollView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => {
            Actions.addStatus()
          }}
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  addCount,
};


export default connect(
  state => ({state}),
  mapDispatchToProps
)(HistoryView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    color: '#e99192',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
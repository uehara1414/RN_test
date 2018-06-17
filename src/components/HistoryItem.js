import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, Image, Button, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {_generateDateStr} from '../utils'
import {
  Actions,
} from 'react-native-router-flux';

export default class HistoryItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const state = this.props.state;

    return (
      <View style={styles.container}
      >
        <Text
          style={styles.text}
          onPress={() => {
            Actions.editStatus({statusID: this.props.id})
          }}
        >
          {this.props.status.text}
        </Text>
        <Text style={styles.date}
              onPress={() => {
                Actions.editStatus({statusID: this.props.id})
              }}
        >
          ({_generateDateStr(this.props.status.updatedAt)})
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fdfffd',
    width: 300
  },
  text: {
    backgroundColor: '#ffffff',
  },
  date: {
    fontSize: 10,
    textAlign: 'right',
  },
  label: {
    color: '#e99192',
  }
});
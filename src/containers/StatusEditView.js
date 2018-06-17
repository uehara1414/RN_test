import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {setStatus} from '../firebase'

import {
  Actions,
} from 'react-native-router-flux';

class StatusEditView extends React.Component {

  constructor(props){
    super(props);
    const status = this.props.state.status[this.props.statusID];

    this.state = {
      id: this.props.statusID,
      text: status.text
    };
  }

  render() {
    const state = this.props.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Content
        </Text>
        <TextInput
          style={styles.text}
          onChangeText={(text) => this.setState({text})}
          multiline = {true}
          maxLength = {256}
          numberOfLines = {5}
          value={this.state.text}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.setStatus(
              this.state.id,
              this.state.text
            )
            Actions.history()
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = {
  setStatus,
};


export default connect(
  state => ({state}),
  mapDispatchToProps
)(StatusEditView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    height: 300,
    width: 200,
    backgroundColor: '#ffffff',
  },
  label: {
    color: '#e99192',
  }
});
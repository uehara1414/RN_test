import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, Image, Button, Text, View, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import {addStatus} from '../firebase'

import {
  Actions,
} from 'react-native-router-flux';

class AddView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
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
          multiline={true}
          maxLength={256}
          numberOfLines={5}
          value={this.state.text}
        />
        <Button
          onPress={() => {
            this.props.addStatus(
              this.state.text
            )
            Actions.history()
          }}
          title="Complete"
          color="#841584"
        />
        <Button
          onPress={() => {
            Actions.history()
          }}
          title="Cancel"
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  addStatus,
};


export default connect(
  state => ({state}),
  mapDispatchToProps
)(AddView);

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
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
    const state = this.props.state;
    console.log('state', state)
    this.state = {
      sex: state.status.sex,
      height: state.status.height,
      weight: state.status.weight,
      age: state.status.age,
    };
  }

  render() {
    const state = this.props.state;
    console.log(state);

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Male or Female
        </Text>
        <TextInput
          onChangeText={(sex) => this.setState({sex: sex})}
          value={this.state.sex}
        />
        <Text style={styles.label}>
          height
        </Text>
        <TextInput
          onChangeText={(height) => this.setState({height})}
          value={this.state.height}
        />
        <Text style={styles.label}>
          weight
        </Text>
        <TextInput
          onChangeText={(weight) => this.setState({weight})}
          value={this.state.weight}
        />
        <Text style={styles.label}>
          age
        </Text>
        <TextInput
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.setStatus(
              this.state.sex,
              this.state.height,
              this.state.weight,
              this.state.age
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
  label: {
    color: '#e99192',
  }
});
import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, Image, Text, View, ScrollView, TextInput} from 'react-native';
import {addCount} from '../firebase'

class StatusEditView extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sex: 'Male',
      height: '170',
      weight: '60',
      age: '22',
    };
  }

  render() {
    const state = this.props.state;

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
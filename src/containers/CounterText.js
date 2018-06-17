import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';
import {addCount} from '../actions'

class CounterText extends React.Component {

  render() {
    const state = this.props.state;

    return (
      <Text style={styles.label}
            onPress={this.props.addCount}
      >
        ----- Push me! count is {state.count} -----
      </Text>
    );
  }
}

const mapDispatchToProps = {
  addCount,
};


export default connect(
  state => ({state}),
  mapDispatchToProps
)(CounterText);

const styles = StyleSheet.create({
  label: {
    color: '#e99192',
  }
});
import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Platform, Image, Text, View, ScrollView} from 'react-native';
import {addCount} from '../firebase'

class HistoryView extends React.Component {

  render() {
    const state = this.props.state;

    return (
      <View style={styles.container}>
        <Text>
          This is history page.
        </Text>
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
  }
});
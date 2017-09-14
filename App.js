import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native';

import Splash from './Components/Splash/Splash';

export default class AlignItemsBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Splash/>
      </View>
    );
  }
};



const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
  }
});
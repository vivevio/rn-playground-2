import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Bar extends Component {
  render() {
    return (
      <View style={ styles.bar }>
        <View style={ [styles.barItem, styles.separator] }>
            <Text style={ styles.barTop }>Following</Text>
            <Text style={ styles.barBottom }>230</Text>
        </View>
        <View style={ styles.barItem }>
            <Text style={ styles.barTop }>Follower</Text>
            <Text style={ styles.barBottom }>176K</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bar: {
      backgroundColor: '#f44336',
      flexDirection: 'row',
      alignItems: 'center',
      alignContent: 'flex-end'
    },
    barItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    barTop: {
        fontWeight: "500",
        color: '#fff'
    },
    barBottom: {
        color: '#fff'
    },
    separator: {
        borderRightColor: '#b9000b',
        borderRightWidth: 2
    }

});

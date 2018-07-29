import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground style={styles.headerBackground} source={require('../img/bg2.jpg')}>
        <View style={styles.header}>
          <View style={styles.pictureWrap}>
            <Image style={styles.picture} source={require('../img/person.jpg')} />
          </View>

          <Text style={styles.name}>
            {this.props.name}
          </Text>
          <Text style={styles.role}>
            {this.props.role}
          </Text>          
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    alignItems: 'center'
  },
  pictureWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 15
  },
  picture: {
    flex: 1,
    width: 'auto',
    alignSelf: 'stretch'
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    color: '#333333',
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5
  },
  role: {
    color: '#f9f9f9',
    fontSize: 20,
    marginTop: 0
  }

});

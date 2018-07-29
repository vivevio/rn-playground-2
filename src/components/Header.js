import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    console.log( this.props );
    return (
      <ImageBackground style={styles.headerBackground} source={require('../../img/bg2.jpg')}>
        <View style={styles.header}>
          <View style={styles.pictureWrap}>
            <Image style={styles.picture} source={require('../../img/person.jpg')} />
          </View>

          <Text style={styles.name}>
            {this.props.profile.userName}
          </Text>
          <Text style={styles.role}>
            {this.props.profile.userRole}
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
    width: 150,
    height: 150,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 15,
    marginTop: 40
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
    marginTop: 0,
    marginBottom: 40
  }

});

function mapStateToProps(state) {
  return {
    profile: state
  }
}

export default connect(mapStateToProps, null)(Header)
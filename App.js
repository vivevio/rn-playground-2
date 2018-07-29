import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';
import Header from './src/components/Header';
import Bar from './src/components/Bar';
import Form from './src/components/Form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Vive Vio Permana',
      userRole: 'Manusia'
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={ styles.parent} innerRef={ref => {this.scroll = ref}}>
        <View style={ styles.container}>
          <StatusBar
            translucent={true}
          />
          <Header/>
          <Bar />
          <Form />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  body: {
    flex: 1
  }
})


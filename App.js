import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput, Button} from 'react-native';
import Header from './components/Header';
import Bar from './components/Bar';
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
          <Header name={this.state.userName} role={this.state.userRole}/>
          <Bar />
        </View>
       
        <View style={ styles.formWrapper}>
          <Text
            style={ styles.formInputLabel }
          >Type a wonderfull Name:</Text>
          <TextInput
            style={ styles.formInput }
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            onChangeText={(value)=>{
              this.setState({
                userName: value
              })
            }}
          />
          <Text
            style={ styles.formInputLabel }
          >Type a wonderfull Role:</Text>
          <TextInput
            style={ styles.formInput }
            ref={(input) => { this.secondTextInput = input; }}
            onEndEditing={ ()=> {
                this.scroll.props.scrollToEnd();
              }
            }
            onChangeText={(value)=>{
              this.setState({
                userRole: value
              })
            }}
          />

          <Button
            onPress={()=>{
              
            }}
            title="Save Changes"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
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
    height: Dimensions.get('window').height - 24
  },
  body: {
    flex: 1
  },
  formWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 30
  },
  formInputLabel: {
    marginBottom: 10
  },
  formInput: {
    borderColor: '#ccc',
    borderWidth: 2,
    textAlign: 'center',
    padding: 5,
    minWidth: '60%',
    marginBottom: 20
  }
})


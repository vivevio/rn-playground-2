import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from "react-native";
import { connect } from 'react-redux';
import { changeUsername, changeRole } from '../actions';

class Form extends Component {
    render() {
        return (
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
              this.props.changeUsername(value);
            }}
          />
          <Text
            style={ styles.formInputLabel }
          >Type a wonderfull Role:</Text>
          <TextInput
            style={ styles.formInput }
            ref={(input) => { this.secondTextInput = input; }}
            onEndEditing={ ()=> {
                // this.scroll.props.scrollToEnd();
              }
            }
            onChangeText={(value)=>{
              this.props.changeRole(value);
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
        );
    }
}

const styles = StyleSheet.create({
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
});

function mapStateToProps(state) {
  return {
    profile: state
  }
}

export default connect(mapStateToProps, {
  changeUsername,
  changeRole
})(Form)
import React, { Component } from 'react'
import { 
  StyleSheet,
  View,
  Text
} from 'react-native'
import STRING from '../../res/string'
import THEME from '../../res/theme'
import Input, { EMAIL, PASSWORD } from '../../ui-component/input'
import Checkable from '../../ui-component/checkable'
import Button from '../../ui-component/button'
import { navigateToRegister, navigateToHome } from '../../common/router';

export default class Authentication extends Component {
  static navigationOptions = { header: null }

  openRegisterScreen = () => {
    navigateToRegister(this)
  }

  requestLogin = () => {
    navigateToHome(this)
  }

  renderInputContainer() {
    return <View style={styles.inputContainer}>
      <Input
        title={STRING.email}
        placeholder={STRING.email}
        verifyMethod={EMAIL}
      />
      <Input
        style={styles.inputPassword}
        title={STRING.password}
        placeholder={STRING.password}
        verifyMethod={PASSWORD}
      />
      <Text style={styles.forgotPassword}>
        {STRING.forgotPassword}
      </Text>
    </View>
  }

  renderTandC() {
    return <Checkable style={styles.tandc} title={STRING.tandc} />
  }

  renderLoginButton() {
    return <Button style={styles.loginButton} text={STRING.login} onPress={this.requestLogin} />
  }

  renderRegister() {
    return <Text 
      style={styles.register}
      onPress={this.openRegisterScreen}
    >
      {STRING.register + ' ' + STRING.appName + '?'}
    </Text>
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInputContainer()}
        {this.renderTandC()}
        {this.renderLoginButton()}
        {this.renderRegister()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.appBackground,
    justifyContent: 'center'
  },
  inputContainer: {
    marginStart: 24,
    marginEnd: 24
  },
  inputPassword: {
    marginTop: 16
  },
  forgotPassword: {
    marginTop: 16,
    textAlign: 'right',
    color: THEME.textLink
  },
  tandc: {
    marginStart: 24, 
    marginEnd: 24,
    marginTop: 44
  },
  loginButton: {
    marginStart: 24, 
    marginEnd: 24,
    marginTop: 16
  },
  register: {
    marginStart: 24, 
    marginEnd: 24,
    marginTop: 16,
    textAlign: 'center',
    color: 'gray',
    textDecorationLine: 'underline'
  }
})
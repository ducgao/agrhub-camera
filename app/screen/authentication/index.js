import { Component } from 'react'
import UserRepository from '../../repository/user'
import { replaceToHome, replaceToLogin } from '../../common/router';

export default class Authentication extends Component {
  static navigationOptions = { header: null }

  userRepository = UserRepository.instance()

  constructor(props) {
    super(props)

    if (this.userRepository.isLogged()) {
      replaceToHome(this)
    }
    else {
      replaceToLogin(this)
    }
  }

  render() {
    return null
  }
}
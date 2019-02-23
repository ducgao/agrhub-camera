import { Component } from 'react'
import UserRepository from '../../repository/user'
import { replaceToLogin, replaceToMain } from '../../common/router';

export default class Authentication extends Component {
  static navigationOptions = { header: null }

  userRepository = UserRepository.instance()

  constructor(props) {
    super(props)

    if (this.userRepository.isLogged()) {
      replaceToMain(this)
    }
    else {
      replaceToLogin(this)
    }
  }

  render() {
    return null
  }
}
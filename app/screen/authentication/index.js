import { Component } from 'react'
import { AsyncStorage } from 'react-native'
import UserRepository from '../../repository/user'
import { replaceToLogin, replaceToMain } from '../../common/router';
import { USER_INFO_STORE_KEY, ACCESS_TOKEN_STORE_KEY } from '../../common/constants';
import Api from '../../api';

export default class Authentication extends Component {
  static navigationOptions = { header: null }

  userRepository = UserRepository.instance()

  constructor(props) {
    super(props)

    // FAKE DATA TO ACCESS TO HOME SCREEN DIRECTLY - REMOVE WHEN RELEASE
    UserRepository.instance().setUserInfo({
      name: "Arg Test",
      email: "argtest@local.com"
    })
    Api.instance().setAccessToken("e8dbf08af09e5d419b366e0684013c53") 
    replaceToMain(this) 

    // this.syncData()
  }

  syncData() {
    const keys = [
      USER_INFO_STORE_KEY, 
      ACCESS_TOKEN_STORE_KEY
    ] 
    AsyncStorage.multiGet(keys).then(res => {
      if (res.length < 2) {
        replaceToLogin(this)
        return
      }

      const userInfo = JSON.parse(res[0])
      const token = res[1]

      if (userInfo.email) {
        UserRepository.instance().setUserInfo(userInfo)
        Api.instance().setAccessToken(token) 
        replaceToMain(this) 
      }
      else {
        replaceToLogin(this)
      }
    })
    .catch(_ => {
      replaceToLogin(this)
    })
  }

  render() {
    return null
  }
}
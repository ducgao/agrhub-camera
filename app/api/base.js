import { AsyncStorage } from 'react-native'
import { ACCESS_TOKEN_STORE_KEY } from '../common/constants';
export default class Base {
  accessToken = null
  setAccessToken(token) {
    this.accessToken = token
    AsyncStorage.setItem(ACCESS_TOKEN_STORE_KEY, token)
  }

  callPost(url, body) {
    return this.call('POST', url, body)
  }

  callGet(url) {
    return this.call('GET', url)
  }

  call(method, url, body) {
    const headers = this.accessToken == null ? {
      'Content-Type': 'application/json'
    } : {
      'Content-Type': 'application/json',
      'X-Tokens': this.accessToken,
    }

    const getConfigs = { method, headers }
    const postConfigs = body ? { ...getConfigs, body } : getConfigs
    const configs = method == 'POST' ? postConfigs : getConfigs

    return new Promise((resolve, rejecter) => {
      fetch(url, configs)
      .then(response => response.json())
      .then(responseJson => {
        resolve(responseJson)
      })
      .catch(e => {
        rejecter(e)
      })
    })
  }
}
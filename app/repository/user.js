export default class UserRepository {
  static singleInstance = null
  static instance() {
    if (this.singleInstance == null) {
      this.singleInstance = new UserRepository()
    }
      
    return this.singleInstance
  }

  userInfo = null

  isLogged() {
    return false
  }
}
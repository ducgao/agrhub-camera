export default class UserRepository {
  static singleInstance = null
  static instance() {
    if (this.singleInstance == null) {
      this.singleInstance = new UserRepository()
    }
      
    return this.singleInstance
  }

  observers = []

  userInfo = {
    displayName: "DucGao4213",
    cameraCount: 3
  }

  isLogged() {
    return true
  }

  addObserver(observer) {
    this.observers.push(observer)
    this.notify()
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(o => o != observer)
  }

  notify() {
    this.observers.forEach(o => {
      o(this.userInfo)
    })
  }
}
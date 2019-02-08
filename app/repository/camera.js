export default class CameraRepository {
  static singleInstance = null
  static instance() {
    if (this.singleInstance == null) {
      this.singleInstance = new CameraRepository()
      this.singleInstance.fetch()
    }
      
    return this.singleInstance
  }

  observers = []

  cameraList = null

  addObserver(observer) {
    this.observers.push(observer)
    this.notify()
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(o => o != observer)
  }

  fetch() {
    this.cameraList = [1, 2, 3]
    this.notify()
  }

  notify() {
    this.observers.forEach(o => {
      o(this.cameraList)
    })
  }
}
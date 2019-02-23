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
    setTimeout(() => {
      this.cameraList = [
        {
          name: "Camera 1",
          thumbnail: "https://t-ec.bstatic.com/images/hotel/max1024x768/903/90329959.jpg"
        }, 
        {
          name: "Camera 2",
          thumbnail: "https://t-ec.bstatic.com/images/hotel/max1024x768/504/50458558.jpg"
        }, 
        {
          name: "Camera 3",
          thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGzhG20HpiRYjwFewVGe1v1YIOwIfSHplVapCcSFqL3Xl2g28"
        }
      ]
      this.notify()
    }, 1000)
  }

  notify() {
    this.observers.forEach(o => {
      o(this.cameraList)
    })
  }
}
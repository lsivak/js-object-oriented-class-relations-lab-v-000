let store = {drivers: [], passengers: []}
let driverId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
}
let passengerId = 0
  class Passenger {
    constructor(name) {
      this.name = name
      this.id = ++passengerId
      store.passengers.push(this)
    }
  }
  let tripId = 0
  class Trip {
    constuctor(driver, passenger) {
      this.id = ++tripId
      if(driver){
      this.driverId = driver.id
    }
      this.passengerId = passenger.id

      store.trips.push(this)
    }
  }

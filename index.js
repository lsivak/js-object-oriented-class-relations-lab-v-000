let store = {drivers: [], passengers: [], trips: []};
let driverId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }
  trips () {
    return store.trips.filter(driver =>{
      return trip.driverId === driver.id
    })
  }
}
let passengerId = 0
  class Passenger {
    constructor(name) {
      this.name = name
      this.id = passengerId++
      store.passengers.push(this)
    }
  }
  let tripId = 0
  class Trip {
    constuctor(driver, passenger) {
      this.driverId = driver.id
      this.passengerId = passenger.id
      this.id = tripId++
      store.trips.push(this)

    }
  }

let store = {drivers: [], passengers: [], trips: []};
let driverId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = driverId++
    store.drivers.push(this)
  }
  trips () {
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers () {
    return this.trips().map(trip => {
      return trip.passenger()
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

    trips () {
      return store.trips.filter(trip => {
        return trip.passenger.Id === this.id
      })
    }

    drivers () {
      return this.trips().map(trip => {
        return trip.driver()
      })
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
    driver () {
      return store.drivers.find(driver => {
        return driver.id === this.driverId
      })
    }
  }

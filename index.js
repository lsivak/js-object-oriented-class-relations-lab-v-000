let trips = {drivers: [], passengers []}
let driverId = 0
class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId
  }
}
let passengerId = 0
  class Passenger {
    constructor(name) {
      this.name = name
      this.id = ++passengerId
    }
  } 
  let tripId = 0
  class Trip {
    constuctor(driver, passenger) {
      this.driverId = driver.id
      this.passengerId = passenger.id
    }
  }
}
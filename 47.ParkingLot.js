class ParkingLot {
  //Here I'm assuming the only information I'm given is an array containing the number of
  //parking spots on each floor.
  constructor(parkingSpaceArray) {
      this.spotsPerFloor = parkingSpaceArray
      this.carMap = {}
      this.totalSpots = this.spotsPerFloor.reduce((acc, currVal) => acc + currVal)
      this.currentOccupancy = 0
  }
  //This should return true if a car can successfully park in a particular spot
  //and false if it cannot.
  carEnters(parkingSpot) {
      if (this.currentOccupancy >= this.totalSpots) return false;
      if (!this.carMap) {
          this.carMap[parkingSpot] = Date.now()
          this.currentOccupancy++
          return true;
      }
      return false;
  }
  //This should return the cost of parking or false if there are any errors
  carLeaves(parkingSpot) {
      if (this.carMap) {
          const hoursParked = Math.abs(Date.now() - this.carMap[parkingSpot]) / 36e5
          delete this.carMap[parkingSpot]
          if (hoursParked < 1) {
              return 3
          }
          if (hoursParked < 2) {
              return 6
          }
          return 9
      }
      return false
  }
  //This returns true if full and false if not
  isParkingLotFull() {
      return this.currentOccupancy < this.totalSpots
  }
  //This returns true if full and false if not
  ifFloorFull(floorNumber) {
      if (this.spotsPerFloor[floor - 1]) {
          const floor = this.spotsPerFloor[floor - 1]
          for (let i = 1; i < floor; i++) {
              if (!this.carMap[floor]) return false
          }
      }
      return true;
  }
  //This returns a number(spot)
  findNearestAvailableSpot() {
      for (let i = 1; i < this.totalSpots; i++) {
          if (!this.carMap[i]) return i
      }
  }
  //This returns an array of numbers(spots)
  findAllAvailableSpots() {
      const availableSpots = []
      for (let i = 1; i < this.totalSpots; i++) {
          if (!this.carMap[i]) availableSpots.push(i)
      }
      return availableSpots
  }
  //This returns a floor(number)
  whichFloorIsSpotOn(parkingSpot) {
      let sum = 0
      for (let i = 0; i < this.spotsPerFloor.length; i++) {
          sum += this.spotsPerFloor[i]
          if (parkingSpot <= sum) return i + 1
      }
  }
}
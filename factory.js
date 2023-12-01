class Car {
  constructor({ state, color, doors }) {
    this.state = state || "brand new";
    this.color = color || "white";
    this.doors = doors || 4;
  }
}

class Truck {
  constructor({ state, color, wheelSize }) {
    this.state = state || "used";
    this.color = color || "red";
    this.wheelSize = wheelSize || "large";
  }
}

class VehicleFactory {
  constructor() {
    this.vehicleClass = Car;
  }
  createVehicle(options) {
    switch (options.vehicleType) {
      case "car": {
        this.vehicleClass = Car;
        break;
      }
      case "truck": {
        this.vehicleClass = Truck;
        break;
      }
    }
    return new this.vehicleClass(options);
  }
}
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  vehicleType: "car",
  doors: 6,
  color: "Balck",
});

console.log(car);
console.log(car instanceof Car);

// Approach 1, we modify a VehicleFactory instance to use the Truck class:
const movingTruck = carFactory.createVehicle({
  vehicleType: "truck",
  state: "like new",
  color: "red",
  wheelSize: "small",
});

console.log(movingTruck);
console.log(movingTruck instanceof Truck);

// Approach 2, we subclass VehicleFactory to create a factory class that builds Trucks

class TruckFactory extends VehicleFactory {
  constructor() {
    super();
    this.vehicleClass = Truck;
  }
}

const truckFactory = new TruckFactory();
const bigTruck = truckFactory.createVehicle({
  state: "omg..so bad.",
  color: "pink",
  wheelSize: "so big",
});

console.log(bigTruck);
console.log(bigTruck instanceof Truck);

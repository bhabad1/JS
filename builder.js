//director
function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}

//builder
function CarBuilder() {
  this.Car = null;
  this.step1 = function () {
    this.Car = new Car();
  };
  this.step2 = function () {
    this.Car.addParts();
  };

  this.get = function () {
    return this.Car;
  };
}
//builder
function TruckBuilder() {
  this.Truck = null;
  this.step1 = function () {
    this.Truck = new Truck();
  };
  this.step2 = function () {
    this.Truck.addParts();
  };

  this.get = function () {
    return this.Truck;
  };
}
//product

function Car() {
  this.doors = 0;
  this.addParts = function () {
    this.doors = 4;
  };
  this.say = function () {
    console.log(`I am a ${this.doors}-door Car`);
  };
}
//product

function Truck() {
  this.doors = 0;
  this.addParts = function () {
    this.doors = 8;
  };
  this.say = function () {
    console.log(`I am a ${this.doors}-door Truck`);
  };
}

function run() {
  const shop = new Shop();
  const carBuilder = new CarBuilder();
  const truckBuilder = new TruckBuilder();
  const car = shop.construct(carBuilder);
  const truck = shop.construct(truckBuilder);
  console.log(car);
  car.say();
  truck.say();
}

run();

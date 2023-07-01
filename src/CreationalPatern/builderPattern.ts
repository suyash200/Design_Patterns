interface Car {
  size: string;
  brakes: string;
  engine: string;
  wheels: string;
}

interface CarBuilder {
  car: Car;
  addTyres(tyres: string): void;
  addBrakes(brakes: string): void;
  addSize(size: string): void;
  addEngine(engine: string): void;
  builder(): object;
}

class Car implements Car {
  constructor() {
    (this.brakes = ""),
      (this.size = ""),
      (this.engine = ""),
      (this.wheels = "");
  }
  SetBrakes(brakes: string): void {
    this.brakes = brakes;
  }
  SetSize(size: string): void {
    this.size = size;
  }
  SetEngine(engine: string): void {
    this.engine = engine;
  }
  SetWheels(wheels: string): void {
    this.wheels = wheels;
  }
}

class CarBuilder implements CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addTyres(tyres: string): void {
    this.car.SetWheels(tyres);
  }
  addBrakes(brakes: string): void {
    this.car.SetBrakes(brakes);
  }
  addEngine(engine: string): void {
    this.car.SetEngine(engine);
  }
  addSize(size: string): void {
    this.car.SetSize(size);
  }
  builder() {
    return this.car;
  }
}

const sportsCar = new CarBuilder();

sportsCar.addBrakes("hydraulic-brakes");
sportsCar.addEngine("v12engine");
sportsCar.addSize("lg");
sportsCar.addTyres("sportsDrive");

console.log(sportsCar.builder());

//output
// Car {
//     brakes: 'hydraulic-brakes',
//     size: 'lg',
//     engine: 'v12engine',
//     wheels: 'sportsDrive'
//   }

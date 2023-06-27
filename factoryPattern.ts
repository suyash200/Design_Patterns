//factory pattern  relies on DRY code principle
//It implies creating and  parent class  that has required functions/resources to execute the given task

// lets create a factory for creating Cars
class CarFactory {
  CreateCar(): string[] {
    const components = [
      "Doors",
      "chassy ",
      "tyres",
      "engine",
      "seats",
      "seatbelts",
      "breaks grade-c",
      "size-sm",
    ];
    return components;
  }

  CreateSportsCar() {
    const components = [
      "Doors",
      "chassy",
      "tyres",
      "engine-fast",
      "seats",
      "seatbelts",
      "breaks grade-a",
      "hydraulic breaks",
      "size-md",
    ];
    return components;
  }

  CreateLuxoryCar(): string[] {
    const components = [
      "Doors-millitaryGrade",
      "chassy",
      "tyres",
      "engine-stable",
      "seats-large",
      "seatbelts",
      "breaks grade-a",
      "hydraulic breaks",
      "size-lg",
    ];
    return components;
  }
}

//creating a child to order those methods as required
const carCreator = new CarFactory();

console.log(carCreator.CreateCar())
console.log(carCreator.CreateLuxoryCar())
console.log(carCreator.CreateSportsCar())

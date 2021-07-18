class Vehicle {
  // color: string = 'red';

  constructor(public color: string) {
    // this.color = color;
  }

  protected drive(): void {
    console.log('Driving...');
  }

  public honk(): void {
    console.log('Honk....');
  }
}

class Car extends Vehicle {
  constructor(wheels: number, color: string) {
    super(color);
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle('red');
vehicle.honk();

const car = new Car(2, 'red');
car.startDrivingProcess();
console.log(car.color);

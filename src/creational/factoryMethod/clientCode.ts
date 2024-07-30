import { CarFactory } from './factories/carFactory';
import { randomVehicleAlgorithm } from './main/randomVehicleAlgorithm';
import { randomNumbers } from './utils/randomNumbers';

const carFactory = new CarFactory();

const customerNames = ['John', 'Maria', 'Peter', 'Pedro'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomVehicleAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop;
  const newCar = carFactory.pickUp(name, `NEW CAR - ${randomNumbers(50)}`);
  newCar.stop();
  console.log('**-***-****-*****-******');
}

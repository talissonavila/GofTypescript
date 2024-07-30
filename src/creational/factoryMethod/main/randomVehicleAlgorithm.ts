import { BicicleFactory } from '../factories/bicycleFactory';
import { CarFactory } from '../factories/carFactory';
import { Vehicle } from '../vehicle/vehicle';
import { randomNumbers } from '../utils/randomNumbers';

export function randomVehicleAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicicleFactory();

  const car1 = carFactory.getVehicle('Celta');
  const car2 = carFactory.getVehicle('i30');
  const bicycle1 = bicycleFactory.getVehicle('BMX');
  const vehicleOptions = [car1, car2, bicycle1];
  return vehicleOptions[randomNumbers(vehicleOptions.length)];
}

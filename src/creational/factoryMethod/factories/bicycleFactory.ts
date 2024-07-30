import { Bicycle } from '../vehicle/bicycle';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './vehicleFactory';

export class BicicleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}

import { ICustomer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individualCustomer';
import { IndividualCar } from '../vehicle/individualCar';
import { IVehicle } from '../vehicle/vehicle';

export class IndividualCustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}

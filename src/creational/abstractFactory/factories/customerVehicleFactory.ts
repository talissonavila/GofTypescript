import { ICustomer } from '../customer/customer';
import { IVehicle } from '../vehicle/vehicle';

export interface ICustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicle;
}

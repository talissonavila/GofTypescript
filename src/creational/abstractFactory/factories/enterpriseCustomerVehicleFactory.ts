import { ICustomer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterpriseCustomer';
import { EnterpriseCar } from '../vehicle/enterpriseCar';
import { IVehicle } from '../vehicle/vehicle';

export class EnterpriseCustomerVehicleFactory {
  createCustomer(customerName: string): ICustomer {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}

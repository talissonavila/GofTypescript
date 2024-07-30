import { ICustomer } from '../customer/customer';
import { IVehicle } from './vehicle';

export class IndividualCar implements IVehicle {
  constructor(
    public name: string,
    private readonly customer: ICustomer,
  ) {}
  pickUp(): void {
    console.log(`Individual ${this.name} is picking up ${this.customer.name}`);
  }
}

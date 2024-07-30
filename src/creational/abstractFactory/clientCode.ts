import { EnterpriseCustomerVehicleFactory } from './factories/enterpriseCustomerVehicleFactory';
import { IndividualCustomerVehicleFactory } from './factories/individualCustomerVehicleFactory';

const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
const individualFactory = new IndividualCustomerVehicleFactory();

const car1 = enterpriseFactory.createVehicle('Gol', 'Peter');
const car2 = individualFactory.createVehicle('i30', 'John');

car1.pickUp();
car2.pickUp();

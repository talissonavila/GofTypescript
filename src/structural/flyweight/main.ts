import { DeliveryFactory } from './delivery/deliveryFactory';
import { deliveryContext } from './delivery/devileryContext';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Talisson', '111', 'Rua da alegria', 'Salvador');
deliveryContext(factory, 'Maria', '111', 'Rua da alegria', 'Salvador');
deliveryContext(factory, 'Pedro', '111', 'Rua B', 'Salvador');
console.log('--------');
console.log(factory.getLocations());

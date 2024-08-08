import { DeliveryFlyweight } from './deliveryFlyweight';
import { DeliveryLocationData } from './deliveryTypes';

export class DeliveryLocation implements DeliveryFlyweight {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  delivery(name: string, number: string): void {
    console.log(`Delivery to ${name}`);
    console.log(
      `at ${this.intrinsicState.city} - ${this.intrinsicState.street}, ${number}`,
    );
  }
}

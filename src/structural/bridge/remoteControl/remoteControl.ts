import { DeviceImplementation } from '../device/deviceImplementation';

export class RemoteControl {
  constructor(protected device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(`${this.device.getName()} is now: ${this.device.getPower()}`);
  }
}

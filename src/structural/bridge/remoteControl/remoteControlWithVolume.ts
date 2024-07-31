import { RemoteControl } from './remoteControl';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    console.log(
      `${this.device.getName()} was in volume ${this.device.getVolume()}`,
    );
    this.device.setVolume(this.device.getVolume() + 5);
    console.log(
      `${this.device.getName()} is now in volume ${this.device.getVolume()}`,
    );
  }
  volumeDown(): void {
    console.log(
      `${this.device.getName()} was in volume ${this.device.getVolume()}`,
    );
    this.device.setVolume(this.device.getVolume() - 5);
    console.log(
      `${this.device.getName()} is now in volume ${this.device.getVolume()}`,
    );
  }
}

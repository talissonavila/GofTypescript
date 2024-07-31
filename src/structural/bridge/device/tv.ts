import { DeviceImplementation } from './deviceImplementation';

export class Tv implements DeviceImplementation {
  private volume = 10;
  private power = false;
  private name = 'TV';

  getName(): string {
    return this.name;
  }

  setVolume(volume: number): void {
    if (volume <= 0 || volume > 100) return;
    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }

  getPower(): boolean {
    return this.power;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
}

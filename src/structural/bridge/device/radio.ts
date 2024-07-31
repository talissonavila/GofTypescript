import { DeviceImplementation } from './deviceImplementation';

export class Radio implements DeviceImplementation {
  private volume = 5;
  private power = false;
  private name = 'Radio';

  getName(): string {
    return this.name;
  }

  setVolume(volume: number): void {
    if (volume <= 0 || volume > 15) return;
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

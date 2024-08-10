export class SmartHouseLight {
  private isOn = false;
  private brightness = 0;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'On' : 'Off';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} is ${this.getPowerStatus()}`);
    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} is ${this.getPowerStatus()}`);
    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.brightness >= 100) return this.brightness;
    this.brightness += 10;
    return this.brightness;
  }

  decreaseIntensity(): number {
    if (this.brightness <= 0) return this.brightness;
    this.brightness -= 10;
    return this.brightness;
  }
}

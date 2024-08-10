import { SmartHouseCommand } from './smartHouseCommand';
import { SmartHouseLight } from './smartHouseLight';

export class BrightnessCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`brightness of ${this.light.name} is ${intensity}`);
  }
  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`brightness of ${this.light.name} is ${intensity}`);
  }
}

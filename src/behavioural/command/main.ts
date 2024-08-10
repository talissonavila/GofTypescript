import { BrightnessCommand } from './brightnessCommand';
import { LightPowerCommand } from './lightPowerCommand';
import { SmartHouseApp } from './smartHouseApp';
import { SmartHouseLight } from './smartHouseLight';

const bedroomLight = new SmartHouseLight('Bedroom light');
const kitchenLight = new SmartHouseLight('Kitchen Light');
const bedroomBrightnessCommand = new BrightnessCommand(bedroomLight);

const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const kitchenLightPowerCommand = new LightPowerCommand(kitchenLight);

const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('button1', bedroomLightPowerCommand);
smartHouseApp.addCommand('button2', kitchenLightPowerCommand);
smartHouseApp.addCommand('button3', bedroomBrightnessCommand);

smartHouseApp.executeCommand('button1');
smartHouseApp.undoCommand('button2');

smartHouseApp.executeCommand('button3');
smartHouseApp.executeCommand('button3');
smartHouseApp.executeCommand('button3');
smartHouseApp.undoCommand('button3');
smartHouseApp.undoCommand('button3');
smartHouseApp.undoCommand('button3');
smartHouseApp.undoCommand('button3');

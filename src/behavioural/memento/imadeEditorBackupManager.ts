import { ImageEditor } from './imageEditor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];
  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`backup: saving state from image editor`);
    this.mementos.push(this.imageEditor.saveState());
  }

  undo(): void {
    console.log(`undo: restoring state from backup`);
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('No backup available');
      return;
    }
    this.imageEditor.restoreState(memento);
    console.log(`backup: restoring state from ${memento.getName()}`);
  }
  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}

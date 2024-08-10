import { ImageEditorBackupManager } from './imadeEditorBackupManager';
import { ImageEditor } from './imageEditor';

const imageEditor = new ImageEditor('media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpeg');

console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);

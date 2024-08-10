import { Memento } from './memento';

export class ConcreteMemento implements Memento {
  constructor(
    private name: string,
    private date: Date,
    private filePath: string,
    private fileFormat: string,
  ) {}

  getName(): string {
    return this.name;
  }
  getDate(): Date {
    return this.date;
  }

  getFilePath(): string {
    return this.filePath;
  }

  getFileFomart(): string {
    return this.fileFormat;
  }
}

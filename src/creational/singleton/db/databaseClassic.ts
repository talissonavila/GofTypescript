import { User } from '../interfaces/user';

export class DatabaseClassic {
  private static _instance: DatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}

  static get instance(): DatabaseClassic {
    if (DatabaseClassic._instance === null) {
      DatabaseClassic._instance = new DatabaseClassic();
    }

    return DatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

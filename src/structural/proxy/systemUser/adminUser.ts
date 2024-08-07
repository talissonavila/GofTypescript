import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './systemUserProtocol';

export class AdminUser implements SystemUserProtocol {
  public firstName: string;
  public username: string;

  constructor(firstName: string, username: string) {
    this.firstName = firstName;
    this.username = username;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av. Brasil', number: 100 },
          { street: 'Av. B', number: 121 },
        ]);
      }, 2000);
    });
  }
}

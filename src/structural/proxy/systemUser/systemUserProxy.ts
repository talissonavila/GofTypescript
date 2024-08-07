import { AdminUser } from './adminUser';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './systemUserProtocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(
    public firstName: string,
    public username: string,
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.username);
    }
    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();
    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }
    return this.realUserAddresses;
  }
}

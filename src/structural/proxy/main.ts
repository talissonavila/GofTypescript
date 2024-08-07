import { SystemUserProxy } from './systemUser/systemUserProxy';

async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('Pedro', 'pedrodelara');
  console.log('Took 2 seconds cause has a timeout');
  console.log(await user.getAddresses());
  console.log('using proxy cache');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}
clientCode();

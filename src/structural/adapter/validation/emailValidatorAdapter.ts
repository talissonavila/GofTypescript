import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './emailValidatorProtocol';

export class EmailValidatorAdapter implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}

import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/emailValidatorProtocol';
import { EmailValidatorAdapter } from './validation/emailValidatorAdapter';
import { emailValidatorFnAdapter } from './validation/emailValidatorFnAdapter';

function validaEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email class válido');
  } else {
    console.log('Email class inválido');
  }
}

validaEmail(new EmailValidatorAdapter(), 'email@email.com');

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
): void {
  if (emailValidator(email)) {
    console.log('Email function válido');
  } else {
    console.log('Email function inválido');
  }
}

validaEmailFn(emailValidatorFnAdapter, 'email@email.com');

import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { cnpj as CNPJ } from 'cpf-cnpj-validator';

@ValidatorConstraint({ async: false })
export class IsCnpjValid implements ValidatorConstraintInterface {
  validate(cnpj: string, args: ValidationArguments) {
    return CNPJ.isValid(cnpj);
  }

  defaultMessage(args: ValidationArguments) {
    return 'CNPJ inválido';
  }
}

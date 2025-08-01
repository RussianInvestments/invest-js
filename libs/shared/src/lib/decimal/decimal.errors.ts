import { BaseError } from '../base-error';

export class DivisionByZeroDecimalError extends BaseError {
  override code = 'DivisionByZeroDecimalError';
}

export class InputParamsNotValidDecimalError extends BaseError {
  override code = 'InputParamsNotValidDecimalError';
}

export class UnknownDecimalError extends BaseError {
  override code = 'UnknownDecimalError';
}

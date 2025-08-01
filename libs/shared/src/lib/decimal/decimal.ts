import Big from 'big.js';
import {
  DivisionByZeroDecimalError,
  InputParamsNotValidDecimalError,
  UnknownDecimalError,
} from './decimal.errors';

export type DecimalInput =
  | {
      units: string;
      nano: string;
    }
  | string;

export class Decimal {
  private readonly _value: Big;

  /**
   * Creates an instance of Decimal.
   *
   * @param {DecimalInput} input - The input value to create a Decimal instance.
   *        It can be either a string representation of a number or an object
   *        with `units` and `nano` string properties.
   *
   * @throws {InputParamsNotValidDecimalError} If the input is empty or invalid.
   * @throws {UnknownDecimalError} If an error occurs during the conversion process.
   */
  constructor(input: DecimalInput) {
    if (
      (typeof input === 'string' && input.trim() !== '') ||
      (typeof input === 'object' &&
        input?.units &&
        input.nano &&
        input.units.trim() !== '' &&
        input.nano.trim() !== '')
    ) {
      this._value = Decimal.toBig(input);
      return;
    }
    throw new InputParamsNotValidDecimalError('Input params is empty');
  }

  private static toBig(input: DecimalInput): Big {
    try {
      if (typeof input === 'string') {
        return new Big(input);
      }
      return new Big(input.units).plus(new Big(`${input.nano}e-9`));
    } catch (error) {
      throw new UnknownDecimalError('Error while creating number', error);
    }
  }

  /**
   * Adds a Decimal value to this Decimal instance.
   *
   * @param {Decimal} inputValue - The Decimal value to add.
   * @returns {Decimal} A new Decimal instance representing the sum.
   * @throws {InputParamsNotValidDecimalError} If the input is not a valid Decimal instance.
   * @throws {UnknownDecimalError} If an error occurs during the addition operation.
   */
  public add(inputValue: Decimal): Decimal {
    if (!(inputValue instanceof Decimal)) {
      throw new InputParamsNotValidDecimalError('Input params is not Decimal');
    }
    try {
      const mappedInputValue = Decimal.toBig(inputValue.toString());

      const newValue: Big = this._value.add(mappedInputValue);

      return new Decimal(newValue.toString());
    } catch (error) {
      throw new UnknownDecimalError('Error while adding number', error);
    }
  }

  /**
   * Multiplies this Decimal instance by the given Decimal value.
   *
   * @param {Decimal} inputValue - The Decimal value to multiply with.
   * @returns {Decimal} A new Decimal instance representing the product.
   * @throws {InputParamsNotValidDecimalError} If the input is not a valid Decimal instance.
   * @throws {UnknownDecimalError} If an error occurs during the multiplication operation.
   */
  public multiply(inputValue: Decimal): Decimal {
    if (!(inputValue instanceof Decimal)) {
      throw new InputParamsNotValidDecimalError('Input params is not Decimal');
    }
    try {
      const mappedInputValue = Decimal.toBig(inputValue.toString());

      const newValue: Big = this._value.mul(mappedInputValue);

      return new Decimal(newValue.toString());
    } catch (error) {
      throw new UnknownDecimalError('Error while multiplying number', error);
    }
  }

  /**
   * Divides this Decimal instance by the given Decimal value.
   *
   * @param {Decimal} inputValue - The Decimal divisor.
   * @returns {Decimal} A new Decimal instance representing the quotient.
   * @throws {InputParamsNotValidDecimalError} If the input is not a valid Decimal instance.
   * @throws {DivisionByZeroDecimalError} If the divisor is zero.
   * @throws {UnknownDecimalError} If an error occurs during the division operation.
   */
  public divide(inputValue: Decimal): Decimal {
    if (!(inputValue instanceof Decimal)) {
      throw new InputParamsNotValidDecimalError('Input params is not Decimal');
    }
    if (inputValue.toString() === '0') {
      throw new DivisionByZeroDecimalError('Division by zero');
    }

    try {
      const mappedInputValue = Decimal.toBig(inputValue.toString());

      const newValue: Big = this._value.div(mappedInputValue);

      return new Decimal(newValue.toString());
    } catch (error) {
      throw new UnknownDecimalError('Error while dividing number', error);
    }
  }

  /**
   * Subtracts the given Decimal value from this Decimal instance.
   *
   * @param {Decimal} inputValue - The Decimal value to subtract.
   * @returns {Decimal} A new Decimal instance representing the difference.
   * @throws {InputParamsNotValidDecimalError} If the input is not a valid Decimal instance.
   * @throws {UnknownDecimalError} If an error occurs during the subtraction operation.
   */
  public subtract(inputValue: Decimal): Decimal {
    if (!(inputValue instanceof Decimal)) {
      throw new InputParamsNotValidDecimalError('Input params is not Decimal');
    }
    try {
      const mappedInputValue = Decimal.toBig(inputValue.toString());

      const newValue: Big = this._value.sub(mappedInputValue);

      return new Decimal(newValue.toString());
    } catch (error) {
      throw new UnknownDecimalError('Error while subtracting number', error);
    }
  }

  /**
   * Converts the Decimal value to its string representation.
   *
   * @returns {string} The string representation of the Decimal value.
   */
  public toString(): string {
    return this._value.toString();
  }
}

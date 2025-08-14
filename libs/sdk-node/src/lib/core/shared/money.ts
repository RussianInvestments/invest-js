import { BaseError, Decimal } from '@t-tech/invest-shared';
import { MoneyValue } from '@tinkoff/grpc-node-client';

export class UnknownMoneyError extends BaseError {
  override code = 'UnknownMoneyError';
}

export type MoneyInput =
  | {
      currency: string;
      decimal: Decimal;
    }
  | MoneyValue;

export class Money {
  private _currency: string;
  private _decimal: Decimal;

  /**
   * Creates a new Money instance from various input formats
   * @param {MoneyInput} input - The money input which can be either:
   *               - A MoneyInput object with currency and decimal
   *               - A MoneyValue object with currency, units, and nano
   * @throws {UnknownMoneyError} If the input format is not recognized
   *
   * @example
   * const money1 = new Money({
   *   currency: 'USD',
   *   decimal: new Decimal({ units: 100, nano: 500000000 })
   * });
   *
   * const money2 = new Money({
   *   currency: 'EUR',
   *   units: 50,
   *   nano: 0
   * });
   */
  constructor(input: MoneyInput) {
    if (typeof input === 'object' && input !== null && 'currency' in input && 'decimal' in input) {
      this._currency = input.currency;
      this._decimal = input.decimal;
      return;
    }

    if (
      typeof input === 'object' &&
      input !== null &&
      'currency' in input &&
      'units' in input &&
      'nano' in input
    ) {
      this._currency = input.currency;
      this._decimal = new Decimal({
        units: input.units,
        nano: input.nano,
      });
      return;
    }

    throw new UnknownMoneyError('Unknown money input');
  }

  public get currency() {
    return this._currency;
  }

  public get decimal() {
    return this._decimal;
  }
}

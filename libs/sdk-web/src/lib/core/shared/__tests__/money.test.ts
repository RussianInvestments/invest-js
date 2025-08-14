import { test, describe } from 'node:test';
import assert from 'node:assert';
import { Decimal } from '@t-tech/invest-shared';
import { MoneyValue } from '@t-tech/invest-grpc-web';
import { Money, UnknownMoneyError } from '../money';

describe('Money', () => {
  test('должен создать Money из MoneyInput', () => {
    const decimal = new Decimal('100.50');
    const money = new Money({
      currency: 'USD',
      decimal,
    });

    assert.strictEqual(money.currency, 'USD');
    assert.strictEqual(money.decimal.toString(), '100.5');
  });

  test('должен создать Money из MoneyValue', () => {
    const money = new Money({
      currency: 'EUR',
      units: 50,
      nano: 500000000,
    } as MoneyValue);

    assert.strictEqual(money.currency, 'EUR');
    assert.strictEqual(money.decimal.toString(), '50.5');
  });

  test('должен выбросить ошибку при неизвестном формате входных данных', () => {
    assert.throws(() => {
      // @ts-expect-error: intentionally invalid input
      new Money({
        currency: 'USD',
        // нет ни decimal, ни units/nano
      });
    }, UnknownMoneyError);
  });

  test('должен выбросить ошибку при неверном типе входных данных', () => {
    assert.throws(() => {
      // @ts-expect-error: intentionally invalid input
      new Money('invalid-input');
    }, UnknownMoneyError);
  });

  test('должен корректно возвращать currency и decimal', () => {
    const decimal = new Decimal('150.25');
    const money = new Money({
      currency: 'RUB',
      decimal,
    });

    assert.strictEqual(money.currency, 'RUB');
    assert.deepStrictEqual(money.decimal.toString(), '150.25');
  });

  test('должен корректно преобразовывать в primitives через decimal', () => {
    const money = new Money({
      currency: 'USD',
      units: 100,
      nano: 500000000,
    } as MoneyValue);

    const primitives = money.decimal.toPrimitives();

    assert.deepStrictEqual(primitives, {
      units: 100,
      nano: 500000000,
    });
  });

  test('должен выбросить ошибку при некорректном вызове toPrimitives через decimal', () => {
    const money = new Money({
      currency: 'USD',
      decimal: new Decimal('0.3333333333'), // неокругляемое значение
    });

    assert.throws(() => {
      money.decimal.toPrimitives();
    }, Error); // Можно уточнить конкретную ошибку, если известен тип
  });
});

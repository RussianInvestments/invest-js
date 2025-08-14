import { test } from 'node:test';
import assert from 'node:assert';
import { Decimal } from '../decimal';

test('Decimal class - constructor with string input', () => {
  const d = new Decimal('123.456');
  assert.strictEqual(d.toString(), '123.456');
});

test('Decimal class - constructor with units and nano', () => {
  const d = new Decimal({ units: 123, nano: 456000000 });
  assert.strictEqual(d.toString(), '123.456');
});

test('Decimal class - add method', () => {
  const d1 = new Decimal('1.5');
  const d2 = new Decimal('2.5');
  const result = d1.add(d2);
  assert.strictEqual(result.toString(), '4');
});

test('Decimal class - multiply method', () => {
  const d = new Decimal('2.5');
  const d2 = new Decimal('3');
  const result = d.multiply(d2);
  assert.strictEqual(result.toString(), '7.5');
});

test('Decimal class - divide method', () => {
  const d = new Decimal('10');
  const d2 = new Decimal('2');
  const result = d.divide(d2);
  assert.strictEqual(result.toString(), '5');
});

test('Decimal class - subtract method', () => {
  const d = new Decimal('5.5');
  const d2 = new Decimal('2.5');
  const result = d.subtract(d2);
  assert.strictEqual(result.toString(), '3');
});

test('Decimal class - chain operations', () => {
  const d = new Decimal('10');
  const d2 = new Decimal('2');
  const result = d.subtract(d2).multiply(d2).divide(d).add(d2);
  assert.strictEqual(result.toString(), '3.6');
});

test('Decimal class - large numbers', () => {
  const d = new Decimal('1000000000000');
  const result = d.multiply(new Decimal('1000000000000'));
  assert.strictEqual(result.toString(), '1e+24');
});

test('Decimal class - precision with nano', () => {
  const d = new Decimal({ units: 0, nano: 123456789 });
  assert.strictEqual(d.toString(), '0.123456789');
});

test('Decimal class - very small numbers', () => {
  const d1 = new Decimal('0.000000001');
  const d2 = new Decimal('0.000000002');
  const result = d1.add(d2);
  assert.strictEqual(result.toString(), '3e-9');
});

test('Decimal class - edge case - zero', () => {
  const d1 = new Decimal('0');
  const d2 = new Decimal('5');
  const result = d1.subtract(d2);
  assert.strictEqual(result.toString(), '-5');
});

test('Decimal class - edge case - negative numbers', () => {
  const d1 = new Decimal('-10');
  const d2 = new Decimal('-5');
  const result = d1.add(d2);
  assert.strictEqual(result.toString(), '-15');
});

test('Decimal class - precision in division', () => {
  const d = new Decimal('10');
  const d2 = new Decimal('3');
  const result = d.divide(d2);
  assert.strictEqual(result.toString(), '3.33333333333333333333');
});

test('Decimal - constructor: empty string input should throw InputParamsNotValidDecimalError', () => {
  assert.throws(
    () => {
      new Decimal('');
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is empty',
    }
  );
});

test('Decimal - constructor: undefined input should throw InputParamsNotValidDecimalError', () => {
  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      new Decimal(undefined);
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is empty',
    }
  );
});

test('Decimal - constructor: null input should throw InputParamsNotValidDecimalError', () => {
  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      new Decimal(null);
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is empty',
    }
  );
});

test('Decimal - constructor: invalid string input should throw UnknownDecimalError', () => {
  assert.throws(
    () => {
      new Decimal('invalid');
    },
    {
      name: 'UnknownDecimalError',
      message: 'Error while creating number',
    }
  );
});

test('Decimal - add: non-Decimal input should throw InputParamsNotValidDecimalError', () => {
  const d1 = new Decimal('1.5');

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.add('not-a-decimal');
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - add: invalid Decimal instance should throw UnknownDecimalError', () => {
  const d1 = new Decimal('1.5');
  const mockDecimal = {
    toString: () => {
      throw new Error('Mock error');
    },
  };

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.add(mockDecimal);
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - multiply: non-Decimal input should throw InputParamsNotValidDecimalError', () => {
  const d1 = new Decimal('2.5');

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.multiply('not-a-decimal');
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - multiply: invalid Decimal instance should throw UnknownDecimalError', () => {
  const d1 = new Decimal('2.5');
  const mockDecimal = {
    toString: () => {
      throw new Error('Mock error');
    },
  };

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.multiply(mockDecimal);
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - divide: division by zero should throw DivisionByZeroDecimalError', () => {
  const d1 = new Decimal('10');
  const d2 = new Decimal('0');

  assert.throws(
    () => {
      d1.divide(d2);
    },
    {
      name: 'DivisionByZeroDecimalError',
      message: 'Division by zero',
    }
  );
});

test('Decimal - divide: non-Decimal input should throw InputParamsNotValidDecimalError', () => {
  const d1 = new Decimal('10');

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.divide('not-a-decimal');
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - divide: invalid Decimal instance should throw UnknownDecimalError', () => {
  const d1 = new Decimal('10');
  const mockDecimal = {
    toString: () => {
      throw new Error('Mock error');
    },
  };

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.divide(mockDecimal);
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - subtract: non-Decimal input should throw InputParamsNotValidDecimalError', () => {
  const d1 = new Decimal('5.5');

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.subtract('not-a-decimal');
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - subtract: invalid Decimal instance should throw UnknownDecimalError', () => {
  const d1 = new Decimal('5.5');
  const mockDecimal = {
    toString: () => {
      throw new Error('Mock error');
    },
  };

  assert.throws(
    () => {
      // @ts-expect-error Testing invalid input
      d1.subtract(mockDecimal);
    },
    {
      name: 'InputParamsNotValidDecimalError',
      message: 'Input params is not Decimal',
    }
  );
});

test('Decimal - toPrimitives: valid decimal should return correct units and nano', () => {
  const d = new Decimal('123.456789000');
  const primitives = d.toPrimitives();

  assert.deepStrictEqual(primitives, {
    units: 123,
    nano: 456789000,
  });
});

test('Decimal - toPrimitives: decimal with trailing zeros should convert successfully', () => {
  const d = new Decimal('0.123456789');
  const primitives = d.toPrimitives();

  assert.deepStrictEqual(primitives, {
    units: 0,
    nano: 123456789,
  });
});

test('Decimal - toPrimitives: zero fractional part should be handled correctly', () => {
  const d = new Decimal('456.000000000');
  const primitives = d.toPrimitives();

  assert.deepStrictEqual(primitives, {
    units: 456,
    nano: 0,
  });
});

test('Decimal - toPrimitives: decimal with non-zero ending should throw CannotConvertToPrimitivesDecimalError', () => {
  assert.throws(
    () => {
      const d = new Decimal('0.1234567891');
      d.toPrimitives();
    },
    {
      name: 'CannotConvertToPrimitivesDecimalError',
      message: 'Cannot convert to primitives',
    }
  );
});

test('Decimal - toPrimitives: decimal with trailing non-zero should throw CannotConvertToPrimitivesDecimalError', () => {
  assert.throws(
    () => {
      const d = new Decimal('123.45678900001');
      d.toPrimitives();
    },
    {
      name: 'CannotConvertToPrimitivesDecimalError',
      message: 'Cannot convert to primitives',
    }
  );
});

test('Decimal - toPrimitives: negative decimal should convert correctly', () => {
  const d = new Decimal('-123.456789000');
  const primitives = d.toPrimitives();

  assert.deepStrictEqual(primitives, {
    units: -123,
    nano: 456789000,
  });
});

test('Decimal - toPrimitives: very small decimal should convert correctly', () => {
  const d = new Decimal('0.000000001');
  const primitives = d.toPrimitives();

  assert.deepStrictEqual(primitives, {
    units: 0,
    nano: 1,
  });
});

test('Decimal - toPrimitives: large decimal should convert correctly', () => {
  const d = new Decimal('1234567890.123456789');
  const primitives = d.toPrimitives();

  assert.deepStrictEqual(primitives, {
    units: 1234567890,
    nano: 123456789,
  });
});

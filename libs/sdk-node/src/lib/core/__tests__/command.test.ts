import { describe, test } from 'node:test';
import * as assert from 'node:assert';
import { APIService, BaseCommand } from '../shared';
import { createMockClient } from './__fixtures__';

class TestCommand extends BaseCommand<{ value: number }, number> {
  call(_client: APIService): number {
    return this.options.value * 2;
  }
}

describe('BaseCommand', () => {
  test('BaseCommand должен сохранять опции', () => {
    const cmd = new TestCommand({ value: 5 });
    assert.deepStrictEqual(cmd.options, { value: 5 });
  });

  test('BaseCommand должен выполнять вызов API клиента', () => {
    const client = createMockClient();
    const cmd = new TestCommand({ value: 5 });
    const result = cmd.call(client);
    assert.strictEqual(result, 10);
  });
});

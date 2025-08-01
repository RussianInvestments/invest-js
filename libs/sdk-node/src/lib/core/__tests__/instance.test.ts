import { test } from 'node:test';
import assert from 'node:assert';
import { InvestNodeSDK } from '../instance';
import { APIService, BaseCommand } from '../shared';

class MockCommand extends BaseCommand<void, string> {
  constructor() {
    super();
  }

  public override call(_client: APIService) {
    return 'hello';
  }
}

test('InvestNodeSDK должен успешно создаться с валидным токеном', () => {
  const options = { token: 'valid-token' };
  const sdk = new InvestNodeSDK(options);
  assert.ok(sdk instanceof InvestNodeSDK);
});

test('InvestNodeSDK должен выбросить EmptyTokenError при пустом токене', () => {
  const invalidOptions = [{ token: null }, { token: undefined }, { token: '' }, {}];

  for (const options of invalidOptions) {
    assert.throws(
      //@ts-expect-error allow for test
      () => new InvestNodeSDK(options),
      { name: 'EmptyTokenError', message: 'Token is empty' }
    );
  }
});

test('InvestNodeSDK.send должен вызвать команду с клиентом', () => {
  const options = { token: 'valid-token' };
  const sdk = new InvestNodeSDK(options);

  const expectedResult = 'hello';
  const command = new MockCommand();

  const result = sdk.send(command);
  assert.deepStrictEqual(result, expectedResult);
});

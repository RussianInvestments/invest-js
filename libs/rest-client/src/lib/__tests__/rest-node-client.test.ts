import assert from 'node:assert';
import test from 'node:test';
import { InvestAPIClient } from '../rest-client';
import { EmptyURLError } from '../errors';

test('rejects with no url', async () => {
  let error: Error | null = null;

  try {
    //@ts-expect-error allow for test
    new InvestAPIClient({});
  } catch (e) {
    error = e as Error;
  }

  assert.deepEqual(error, new EmptyURLError('Empty URL'));
});

test('build basic client from url', async () => {
  const client = new InvestAPIClient({
    url: `http://localhost:3000`,
  });

  assert.notEqual(client.restClient, undefined);
});

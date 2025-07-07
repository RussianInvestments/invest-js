import { NodeApiClient, TTechAPIClientOptions } from '@tinkoff/grpc-node-client';
import { BaseCommand } from './shared';
import { EmptyTokenError } from './instance.errors';

export interface InverstNodeSDKOptions extends TTechAPIClientOptions {}

export class InvestNodeSDK {
  #client: NodeApiClient;

  constructor(options: InverstNodeSDKOptions) {
    if(options.token === null || options.token === undefined || options.token === '') {
      throw new EmptyTokenError('Token is empty');
    }
    this.#client = new NodeApiClient(options);
  }

  send<T, S>(command: BaseCommand<T, S>): S {
    return command.call(this.#client);
  }
}

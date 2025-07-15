import { WebApiClient, TTechAPIClientOptions } from '@t-tech/invest-grpc-web';
import { BaseCommand } from './shared';
import { EmptyTokenError } from './instance.errors';

export interface InverstWebSDKOptions extends TTechAPIClientOptions {}

export class InvestWebSDK {
  #client: WebApiClient;

  constructor(options: InverstWebSDKOptions) {
    if(options.token === null || options.token === undefined || options.token === '') {
      throw new EmptyTokenError('Token is empty');
    }
    this.#client = new WebApiClient(options);
  }

  send<T, S>(command: BaseCommand<T, S>): S {
    return command.call(this.#client);
  }
}

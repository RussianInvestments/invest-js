import { EmptyURLError } from './errors';
import * as generatedApiClient from './generated-api/generated-api'

type GeneratedApiClient = Omit<typeof generatedApiClient, 'setBaseUrl' | 'setDefaultHeaders' | 'setDefaultFetchParams' | 'default'>;

interface InvestAPIClientOptions {
  url: string;
}

export class InvestAPIClient {
  #client: GeneratedApiClient; 
  constructor(options: InvestAPIClientOptions) {
    if(!options.url) {
      throw new EmptyURLError('Empty URL');
    }
    this.#client = generatedApiClient.default(options.url);
  }
  public get restClient(): GeneratedApiClient {
    return this.#client;
  }
}

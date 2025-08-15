import { InstrumentsRequest, CurrenciesResponse } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetCurrenciesInput extends InstrumentsRequest {}

export interface GetCurrenciesOutput extends CurrenciesResponse {}

export class GetCurrenciesCommand extends BaseCommand<
  GetCurrenciesInput,
  Promise<GetCurrenciesOutput>
> {
  public override call(client: APIService): Promise<GetCurrenciesOutput> {
    return client.instruments.currencies(this.options);
  }
}

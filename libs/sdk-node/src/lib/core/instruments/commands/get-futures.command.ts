import { InstrumentsRequest, FuturesResponse } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetFuturesInput extends InstrumentsRequest {}

export interface GetFuturesOutput extends FuturesResponse {}

export class GetFuturesCommand extends BaseCommand<GetFuturesInput, Promise<GetFuturesOutput>> {
  public override call(client: APIService): Promise<GetFuturesOutput> {
    return client.instruments.futures(this.options);
  }
}

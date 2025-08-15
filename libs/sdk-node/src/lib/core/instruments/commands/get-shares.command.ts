import { InstrumentsRequest, SharesResponse } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetSharesInput extends InstrumentsRequest {}

export interface GetSharesOutput extends SharesResponse {}

export class GetSharesCommand extends BaseCommand<GetSharesInput, Promise<GetSharesOutput>> {
  public override call(client: APIService): Promise<GetSharesOutput> {
    return client.instruments.shares(this.options);
  }
}

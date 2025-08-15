import { InstrumentsRequest, EtfsResponse } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetETFsInput extends InstrumentsRequest {}

export interface GetETFsOutput extends EtfsResponse {}

export class GetETFsCommand extends BaseCommand<GetETFsInput, Promise<GetETFsOutput>> {
  public override call(client: APIService): Promise<GetETFsOutput> {
    return client.instruments.etfs(this.options);
  }
}

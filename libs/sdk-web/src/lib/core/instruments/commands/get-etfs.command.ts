import { InstrumentsRequest, EtfsResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetETFsInput extends InstrumentsRequest {}

export interface GetETFsOutput extends EtfsResponse {}

export class GetETFsCommand extends BaseCommand<GetETFsInput, Promise<GetETFsOutput>> {
  public override call(client: APIService): Promise<GetETFsOutput> {
    return client.instruments.etfs(this.options);
  }
}

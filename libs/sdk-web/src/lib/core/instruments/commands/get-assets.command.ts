import { InstrumentsRequest, AssetsResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetAssetsInput extends InstrumentsRequest {}

export interface GetAssetsOutput extends AssetsResponse {}

export class GetAssetsCommand extends BaseCommand<GetAssetsInput, Promise<GetAssetsOutput>> {
  public override call(client: APIService): Promise<GetAssetsOutput> {
    return client.instruments.getAssets(this.options);
  }
}

import { InstrumentsRequest, BondsResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetBondsInput extends InstrumentsRequest {}

export interface GetBondsOutput extends BondsResponse {}

export class GetBondsCommand extends BaseCommand<GetBondsInput, Promise<GetBondsOutput>> {
  public override call(client: APIService): Promise<GetBondsOutput> {
    return client.instruments.bonds(this.options);
  }
}

import { InstrumentsRequest, OptionsResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetOptionsInput extends InstrumentsRequest {}

export interface GetOptionsOutput extends OptionsResponse {}

export class GetOptionsCommand extends BaseCommand<GetOptionsInput, Promise<GetOptionsOutput>> {
  public override call(client: APIService): Promise<GetOptionsOutput> {
    return client.instruments.options(this.options);
  }
}

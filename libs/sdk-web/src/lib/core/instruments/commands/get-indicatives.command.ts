import { IndicativesRequest, IndicativesResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetIndicativesInput extends IndicativesRequest {}

export interface GetIndicativesOutput extends IndicativesResponse {}

export class GetIndicativesCommand extends BaseCommand<
  GetIndicativesInput,
  Promise<GetIndicativesOutput>
> {
  public override call(client: APIService): Promise<GetIndicativesOutput> {
    return client.instruments.indicatives(this.options);
  }
}

import { GetDividendsRequest, GetDividendsResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetDividendsInput extends GetDividendsRequest {}

export interface GetDividendsOutput extends GetDividendsResponse {}

export class GetDividendsCommand extends BaseCommand<
  GetDividendsInput,
  Promise<GetDividendsOutput>
> {
  public override call(client: APIService): Promise<GetDividendsOutput> {
    return client.instruments.getDividends(this.options);
  }
}

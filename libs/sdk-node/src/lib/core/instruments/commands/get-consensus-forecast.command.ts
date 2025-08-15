import {
  GetConsensusForecastsRequest,
  GetConsensusForecastsResponse,
} from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetConsensusForecastsInput extends GetConsensusForecastsRequest {}

export interface GetConsensusForecastsOutput extends GetConsensusForecastsResponse {}

export class GetConsensusForecastsCommand extends BaseCommand<
  GetConsensusForecastsInput,
  Promise<GetConsensusForecastsOutput>
> {
  public override call(client: APIService): Promise<GetConsensusForecastsOutput> {
    return client.instruments.getConsensusForecasts(this.options);
  }
}

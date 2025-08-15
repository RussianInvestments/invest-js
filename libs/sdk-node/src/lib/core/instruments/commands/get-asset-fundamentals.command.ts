import {
  GetAssetFundamentalsRequest,
  GetAssetFundamentalsResponse,
} from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';

export interface GetAssetFundamentalsInput extends GetAssetFundamentalsRequest {}

export interface GetAssetFundamentalsOutput extends GetAssetFundamentalsResponse {}

export class GetAssetFundamentalsCommand extends BaseCommand<
  GetAssetFundamentalsInput,
  Promise<GetAssetFundamentalsOutput>
> {
  public override call(client: APIService): Promise<GetAssetFundamentalsOutput> {
    return client.instruments.getAssetFundamentals(this.options);
  }
}

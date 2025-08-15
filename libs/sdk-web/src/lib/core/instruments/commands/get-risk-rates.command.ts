import { RiskRatesRequest, RiskRatesResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetRiskRatesInput extends RiskRatesRequest {}

export interface GetRiskRatesOutput extends RiskRatesResponse {}

export class GetRiskRatesCommand extends BaseCommand<
  GetRiskRatesInput,
  Promise<GetRiskRatesOutput>
> {
  public override call(client: APIService): Promise<GetRiskRatesOutput> {
    return client.instruments.getRiskRates(this.options);
  }
}

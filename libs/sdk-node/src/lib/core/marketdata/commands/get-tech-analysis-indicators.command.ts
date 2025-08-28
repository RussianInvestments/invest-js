import { GetTechAnalysisRequest } from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';
import { TechAnalysisDeviation, TechAnalysisIndicator } from '../types';
import { Decimal } from '@t-tech/invest-shared';

export interface GetTechAnalysisIndicatorsInput extends Omit<GetTechAnalysisRequest, 'deviation'> {
  deviation?: TechAnalysisDeviation;
}

export interface GetTechAnalysisIndicatorsOutput {
  techAnalysisIndicators: TechAnalysisIndicator[];
}

export class GetTechAnalysisIndicatorsCommand extends BaseCommand<
  GetTechAnalysisIndicatorsInput,
  Promise<GetTechAnalysisIndicatorsOutput>
> {
  public override async call(client: APIService): Promise<GetTechAnalysisIndicatorsOutput> {
    const { deviation, ...otherOptions } = this.options;
    const response = await client.marketdata.getTechAnalysis({
      ...otherOptions,
      deviation: deviation?.deviationMultiplier
        ? { deviationMultiplier: deviation.deviationMultiplier.toPrimitives() }
        : undefined,
    });

    return {
      techAnalysisIndicators: response.technicalIndicators.map((value) => ({
        timestamp: value.timestamp,
        lowerBand: value.lowerBand ? new Decimal(value.lowerBand) : undefined,
        macd: value.macd ? new Decimal(value.macd) : undefined,
        middleBand: value.middleBand ? new Decimal(value.middleBand) : undefined,
        signal: value.signal ? new Decimal(value.signal) : undefined,
      })),
    };
  }
}

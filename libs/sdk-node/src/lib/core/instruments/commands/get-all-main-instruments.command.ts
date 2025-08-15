import {
  InstrumentType,
  Bond,
  Etf,
  Future,
  Option,
  Share,
  InstrumentsRequest,
} from '@tinkoff/grpc-node-client';
import { APIService, BaseCommand } from '../../shared';
import { GetSharesCommand } from './get-shares.command';
import { GetBondsCommand } from './get-bonds.command';
import { GetETFsCommand } from './get-etfs.command';
import { GetFuturesCommand } from './get-futures.command';
import { GetOptionsCommand } from './get-options.command';
import { ClassConstructor } from '@t-tech/invest-shared';

type AvailableInstrumentTypes =
  | InstrumentType.INSTRUMENT_TYPE_BOND
  | InstrumentType.INSTRUMENT_TYPE_ETF
  | InstrumentType.INSTRUMENT_TYPE_FUTURES
  | InstrumentType.INSTRUMENT_TYPE_OPTION
  | InstrumentType.INSTRUMENT_TYPE_SHARE;

type AvailableCommands =
  | GetBondsCommand
  | GetETFsCommand
  | GetFuturesCommand
  | GetOptionsCommand
  | GetSharesCommand;

export interface GetAllMainInstrumentsInput {
  types?: AvailableInstrumentTypes[];
  filter: InstrumentsRequest;
}

export type GetAllMainInstrumentsOutput = Array<Bond | Etf | Future | Option | Share>;

export class GetAllMainInstrumentsCommand extends BaseCommand<
  GetAllMainInstrumentsInput,
  Promise<GetAllMainInstrumentsOutput>
> {
  private readonly typeToCommand: Record<
    AvailableInstrumentTypes,
    ClassConstructor<AvailableCommands>
  > = {
    [InstrumentType.INSTRUMENT_TYPE_BOND]: GetBondsCommand,
    [InstrumentType.INSTRUMENT_TYPE_ETF]: GetETFsCommand,
    [InstrumentType.INSTRUMENT_TYPE_FUTURES]: GetFuturesCommand,
    [InstrumentType.INSTRUMENT_TYPE_OPTION]: GetOptionsCommand,
    [InstrumentType.INSTRUMENT_TYPE_SHARE]: GetSharesCommand,
  };

  public override async call(client: APIService): Promise<GetAllMainInstrumentsOutput> {
    const callCommands: AvailableCommands[] = [];

    if (!this.options.types || this.options.types.length === 0) {
      const commands = Object.values(this.typeToCommand).map(
        (Command) => new Command(this.options.filter)
      );
      callCommands.push(...commands);
    } else {
      const commands = this.options.types.map((type) => {
        const Command = this.typeToCommand[type];

        return new Command(this.options.filter);
      });
      callCommands.push(...commands);
    }

    const data = await Promise.allSettled(callCommands.map((command) => command.call(client)));

    return data.reduce((acc, curr) => {
      if (curr.status === 'fulfilled') {
        acc.push(...curr.value.instruments);
      }
      return acc;
    }, [] as GetAllMainInstrumentsOutput);
  }
}

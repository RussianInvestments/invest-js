import { Inject } from '@nestjs/common';
import { INVEST_SDK_CLIENT } from '../invest-sdk';
import {
  GetAccountsCommand,
  GetOperationsCommand,
  GetPositionsCommand,
  InvestNodeSDK,
  OperationState,
} from '@t-tech/invest-sdk-node';
import { startOfDay } from 'date-fns';

export class PortfolioService {
  constructor(
    @Inject(INVEST_SDK_CLIENT)
    private readonly investSdk: InvestNodeSDK
  ) {}

  getAccounts() {
    const command = new GetAccountsCommand({});

    return this.investSdk.send(command);
  }

  getPositionsByAccount(accountId: string) {
    const command = new GetPositionsCommand({ accountId });
    return this.investSdk.send(command);
  }

  // TODO: Использовать instrumentId
  getTodayExecutedOperationsByAccountAndFigi(accountId: string, figi: string) {
    const command = new GetOperationsCommand({
      accountId,
      figi,
      from: startOfDay(new Date()),
      to: new Date(),
      state: OperationState.OPERATION_STATE_EXECUTED,
    });

    return this.investSdk.send(command);
  }
}

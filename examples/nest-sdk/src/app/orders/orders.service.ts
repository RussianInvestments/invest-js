import { Inject } from '@nestjs/common';
import { INVEST_SDK_CLIENT } from '../invest-sdk';
import {
  CreateOrderCommand,
  GetActiveOrdersStreamCommand,
  GetSuccessOrdersStreamCommand,
  InvestNodeSDK,
} from '@t-tech/invest-sdk-node';
import { OrderDirection, OrderType, PriceType, TimeInForceType } from '@tinkoff/grpc-node-client';
import { randomUUID } from 'node:crypto';
import { Decimal } from '@t-tech/invest-shared';
import { map, mergeAll, Observable } from 'rxjs';

export class OrdersService {
  constructor(
    @Inject(INVEST_SDK_CLIENT)
    private readonly investSdk: InvestNodeSDK
  ) {}

  buyInstrument(accountId: string, instrumentId: string, quantity: number) {
    const command = new CreateOrderCommand({
      accountId,
      priceType: PriceType.PRICE_TYPE_CURRENCY,
      orderId: randomUUID(),
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      instrumentId,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      quantity,
      price: new Decimal('1'),
      timeInForce: TimeInForceType.TIME_IN_FORCE_DAY,
    });
    return this.investSdk.send(command);
  }

  async getActiveOrdersStream(accountId: string): Promise<Observable<string>> {
    const command = new GetActiveOrdersStreamCommand({
      accounts: [accountId],
    });

    const iterableStream = this.investSdk.send(command);

    const combinedStream = iterableStream.pipe(
      mergeAll(),
      map((value) => {
        return value.orderState?.orderId || 'not found';
      })
    );

    return combinedStream;
  }

  async getSuccessOrdersStream(accountId: string): Promise<Observable<string>> {
    const command = new GetSuccessOrdersStreamCommand({
      accounts: [accountId],
    });

    return this.investSdk.send(command).pipe(
      map((value) => {
        return value.orderState?.orderId || 'not found';
      })
    );
  }
}

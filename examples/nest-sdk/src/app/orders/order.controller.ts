import { Controller, Get, Param, Query, Sse } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrdersService) {}

  @Get('buy/:instrumentId')
  async buyInstrument(
    @Param('instrumentId') instrumentId: string,
    @Query('quantity') quantity: number,
    @Query('accountId') accountId: string
  ) {
    return this.orderService.buyInstrument(accountId, instrumentId, quantity);
  }

  @Sse('stream-active-ids/:accountId')
  async getOrderIdsActive(@Param('accountId') accountId: string) {
    return this.orderService.getActiveOrdersStream(accountId);
  }

  @Sse('stream-success-ids/:accountId')
  async getOrderIdsSuccess(@Param('accountId') accountId: string) {
    return this.orderService.getSuccessOrdersStream(accountId);
  }
}

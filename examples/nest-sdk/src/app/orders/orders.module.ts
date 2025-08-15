import { Module } from "@nestjs/common";
import { OrdersService } from "./orders.service";
import { OrderController } from "./order.controller";

@Module({
  providers: [OrdersService],
  controllers: [OrderController],
  exports: []
})
export class OrdersModule {}

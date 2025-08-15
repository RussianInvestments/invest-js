import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CONFIGS } from './configs';
import { InvestSdkModule } from './invest-sdk';
import { PortfolioModule } from './portfolio';
import { OrdersModule } from './orders';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...CONFIGS],
    }),
    InvestSdkModule,
    PortfolioModule,
    OrdersModule,
  ],
})
export class AppModule {}

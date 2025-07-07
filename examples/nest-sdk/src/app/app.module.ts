import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CONFIGS } from './configs';
import { InvestSdkModule } from './invest-sdk';
import { PortfolioModule } from './portfolio';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [...CONFIGS],
    }),
    InvestSdkModule,
    PortfolioModule
  ],
})
export class AppModule {}

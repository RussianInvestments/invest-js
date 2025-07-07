import { Module } from "@nestjs/common";
import { PortfolioService } from "./portfolio.service";
import { PortfolioController } from "./portfolio.controller";

@Module({
  providers: [PortfolioService],
  controllers: [PortfolioController],
  exports: [PortfolioService]
})
export class PortfolioModule {}

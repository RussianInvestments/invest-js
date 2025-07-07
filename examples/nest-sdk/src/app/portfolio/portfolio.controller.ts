import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { PortfolioService } from "./portfolio.service";

@ApiTags('portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(
    private readonly portfolioService: PortfolioService
  ) {

  }

  @Get('accounts')
  getAccounts() {
    return this.portfolioService.getAccounts();
  }

  @Get('accounts/:accountId/positions')
  getPositionsByAccount(@Param('accountId') accountId: string) {
    return this.portfolioService.getPositionsByAccount(accountId);
  }

  @Get('accounts/:accountId/positions/:figi/today_executed')
  getOperationsByAccountAndFigi(@Param('accountId') accountId: string, @Param('figi') figi: string ) {
    return this.portfolioService.getTodayExecutedOperationsByAccountAndFigi(accountId, figi);
  }
}

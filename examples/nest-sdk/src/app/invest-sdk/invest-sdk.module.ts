import { Global, Module } from "@nestjs/common";
import { INVEST_SDK_CLIENT } from "./invest-sdk.constants";
import { ConfigService } from "@nestjs/config";
import  {InvestNodeSDK} from '@t-tech/invest-sdk-node'

@Global()
@Module({
  providers: [
    {
      provide: INVEST_SDK_CLIENT,
      useFactory:(configService: ConfigService) => {
        return new InvestNodeSDK({
            url: configService.getOrThrow<string>('host'),
            token: configService.getOrThrow<string>('token'),
          })
      },
      inject: [ConfigService]
    }
  ],
  exports: [INVEST_SDK_CLIENT]
})
export class InvestSdkModule { }

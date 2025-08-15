import { GetBondCouponsRequest, GetBondCouponsResponse } from '@t-tech/invest-grpc-web';
import { APIService, BaseCommand } from '../../shared';

export interface GetBondCouponsInput extends GetBondCouponsRequest {}

export interface GetBondCouponsOutput extends GetBondCouponsResponse {}

export class GetBondCouponsCommand extends BaseCommand<
  GetBondCouponsInput,
  Promise<GetBondCouponsOutput>
> {
  public override call(client: APIService): Promise<GetBondCouponsOutput> {
    return client.instruments.getBondCoupons(this.options);
  }
}

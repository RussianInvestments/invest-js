import { GetAccountsRequest, GetAccountsResponse } from "@t-tech/invest-grpc-web";
import { APIService, BaseCommand } from "../../shared";

export interface GetAccountsInput extends GetAccountsRequest { }

export interface GetAccountsOutput extends GetAccountsResponse { }

export class GetAccountsCommand extends BaseCommand<GetAccountsInput, Promise<GetAccountsOutput>> {
  public override call(client: APIService): Promise<GetAccountsOutput> {
    return client.users.getAccounts(this.options);
  }
}

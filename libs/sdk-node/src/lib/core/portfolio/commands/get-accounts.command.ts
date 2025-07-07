import { GetAccountsRequest, GetAccountsResponse, NodeApiClient } from "@tinkoff/grpc-node-client";
import { BaseCommand } from "../../shared";

export interface GetAccountsInput extends GetAccountsRequest { }

export interface GetAccountsOutput extends GetAccountsResponse { }

export class GetAccountsCommand extends BaseCommand<GetAccountsInput, Promise<GetAccountsOutput>> {
  public override call(client: NodeApiClient): Promise<GetAccountsOutput> {
    return client.users.getAccounts(this.options);
  }
}

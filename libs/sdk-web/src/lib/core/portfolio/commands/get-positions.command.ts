import { PositionsRequest, PositionsResponse } from "@t-tech/invest-grpc-web";
import { APIService, BaseCommand } from "../../shared";

export interface GetPositionsInput extends PositionsRequest { }

export interface GetPositionsOutput extends PositionsResponse { }

export class GetPositionsCommand extends BaseCommand<GetPositionsInput, Promise<GetPositionsOutput>> {
  public override call(client: APIService): Promise<GetPositionsOutput> {
    return client.operations.getPositions(this.options);
  }
}

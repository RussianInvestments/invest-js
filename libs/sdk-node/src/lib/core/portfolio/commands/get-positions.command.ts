import { NodeApiClient, PositionsRequest, PositionsResponse } from "@tinkoff/grpc-node-client";
import { BaseCommand } from "../../shared";

export interface GetPositionsInput extends PositionsRequest { }

export interface GetPositionsOutput extends PositionsResponse { }

export class GetPositionsCommand extends BaseCommand<GetPositionsInput, Promise<GetPositionsOutput>> {
  public override call(client: NodeApiClient): Promise<GetPositionsOutput> {
    return client.operations.getPositions(this.options);
  }
}

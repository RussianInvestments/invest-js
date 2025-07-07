import { NodeApiClient, OperationsRequest, OperationsResponse } from "@tinkoff/grpc-node-client";
import { BaseCommand } from "../../shared";

export {OperationState} from '@tinkoff/grpc-node-client'

export interface GetOperationsInput extends OperationsRequest { }

export interface GetOperationsOutput extends OperationsResponse { }

export class GetOperationsCommand extends BaseCommand<GetOperationsInput, Promise<GetOperationsOutput>> {
  public override call(client: NodeApiClient): Promise<GetOperationsOutput> {
    return client.operations.getOperations(this.options);
  }
}

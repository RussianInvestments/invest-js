import { OperationsRequest, OperationsResponse } from "@t-tech/invest-grpc-web";
import { APIService, BaseCommand } from "../../shared";

export {OperationState} from '@t-tech/invest-grpc-web'

export interface GetOperationsInput extends OperationsRequest { }

export interface GetOperationsOutput extends OperationsResponse { }

export class GetOperationsCommand extends BaseCommand<GetOperationsInput, Promise<GetOperationsOutput>> {
  public override call(client: APIService): Promise<GetOperationsOutput> {
    return client.operations.getOperations(this.options);
  }
}

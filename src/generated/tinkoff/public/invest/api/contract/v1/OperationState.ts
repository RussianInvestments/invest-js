// Original file: investAPI/src/docs/contracts/operations.proto

export const OperationState = {
  OPERATION_STATE_UNSPECIFIED: 'OPERATION_STATE_UNSPECIFIED',
  OPERATION_STATE_EXECUTED: 'OPERATION_STATE_EXECUTED',
  OPERATION_STATE_CANCELED: 'OPERATION_STATE_CANCELED',
  OPERATION_STATE_PROGRESS: 'OPERATION_STATE_PROGRESS',
} as const;

export type OperationState =
  | 'OPERATION_STATE_UNSPECIFIED'
  | 0
  | 'OPERATION_STATE_EXECUTED'
  | 1
  | 'OPERATION_STATE_CANCELED'
  | 2
  | 'OPERATION_STATE_PROGRESS'
  | 3

export type OperationState__Output = typeof OperationState[keyof typeof OperationState]

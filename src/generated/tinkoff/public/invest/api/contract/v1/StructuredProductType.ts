// Original file: investAPI/src/docs/contracts/instruments.proto

export const StructuredProductType = {
  SP_TYPE_UNSPECIFIED: 'SP_TYPE_UNSPECIFIED',
  SP_TYPE_DELIVERABLE: 'SP_TYPE_DELIVERABLE',
  SP_TYPE_NON_DELIVERABLE: 'SP_TYPE_NON_DELIVERABLE',
} as const;

export type StructuredProductType =
  | 'SP_TYPE_UNSPECIFIED'
  | 0
  | 'SP_TYPE_DELIVERABLE'
  | 1
  | 'SP_TYPE_NON_DELIVERABLE'
  | 2

export type StructuredProductType__Output = typeof StructuredProductType[keyof typeof StructuredProductType]

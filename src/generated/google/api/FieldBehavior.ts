// Original file: investAPI/src/docs/contracts/google/api/field_behavior.proto

export const FieldBehavior = {
  FIELD_BEHAVIOR_UNSPECIFIED: 'FIELD_BEHAVIOR_UNSPECIFIED',
  OPTIONAL: 'OPTIONAL',
  REQUIRED: 'REQUIRED',
  OUTPUT_ONLY: 'OUTPUT_ONLY',
  INPUT_ONLY: 'INPUT_ONLY',
  IMMUTABLE: 'IMMUTABLE',
  UNORDERED_LIST: 'UNORDERED_LIST',
  NON_EMPTY_DEFAULT: 'NON_EMPTY_DEFAULT',
} as const;

export type FieldBehavior =
  | 'FIELD_BEHAVIOR_UNSPECIFIED'
  | 0
  | 'OPTIONAL'
  | 1
  | 'REQUIRED'
  | 2
  | 'OUTPUT_ONLY'
  | 3
  | 'INPUT_ONLY'
  | 4
  | 'IMMUTABLE'
  | 5
  | 'UNORDERED_LIST'
  | 6
  | 'NON_EMPTY_DEFAULT'
  | 7

export type FieldBehavior__Output = typeof FieldBehavior[keyof typeof FieldBehavior]

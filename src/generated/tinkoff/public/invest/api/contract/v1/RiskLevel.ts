// Original file: investAPI/src/docs/contracts/instruments.proto

export const RiskLevel = {
  RISK_LEVEL_UNSPECIFIED: 'RISK_LEVEL_UNSPECIFIED',
  RISK_LEVEL_LOW: 'RISK_LEVEL_LOW',
  RISK_LEVEL_MODERATE: 'RISK_LEVEL_MODERATE',
  RISK_LEVEL_HIGH: 'RISK_LEVEL_HIGH',
} as const;

export type RiskLevel =
  | 'RISK_LEVEL_UNSPECIFIED'
  | 0
  | 'RISK_LEVEL_LOW'
  | 1
  | 'RISK_LEVEL_MODERATE'
  | 2
  | 'RISK_LEVEL_HIGH'
  | 3

export type RiskLevel__Output = typeof RiskLevel[keyof typeof RiskLevel]

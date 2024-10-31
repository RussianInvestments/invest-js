// Original file: investAPI/src/docs/contracts/instruments.proto

export const AssetType = {
  ASSET_TYPE_UNSPECIFIED: 'ASSET_TYPE_UNSPECIFIED',
  ASSET_TYPE_CURRENCY: 'ASSET_TYPE_CURRENCY',
  ASSET_TYPE_COMMODITY: 'ASSET_TYPE_COMMODITY',
  ASSET_TYPE_INDEX: 'ASSET_TYPE_INDEX',
  ASSET_TYPE_SECURITY: 'ASSET_TYPE_SECURITY',
} as const;

export type AssetType =
  | 'ASSET_TYPE_UNSPECIFIED'
  | 0
  | 'ASSET_TYPE_CURRENCY'
  | 1
  | 'ASSET_TYPE_COMMODITY'
  | 2
  | 'ASSET_TYPE_INDEX'
  | 3
  | 'ASSET_TYPE_SECURITY'
  | 4

export type AssetType__Output = typeof AssetType[keyof typeof AssetType]

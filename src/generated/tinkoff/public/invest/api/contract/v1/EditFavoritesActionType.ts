// Original file: investAPI/src/docs/contracts/instruments.proto

export const EditFavoritesActionType = {
  EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED: 'EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED',
  EDIT_FAVORITES_ACTION_TYPE_ADD: 'EDIT_FAVORITES_ACTION_TYPE_ADD',
  EDIT_FAVORITES_ACTION_TYPE_DEL: 'EDIT_FAVORITES_ACTION_TYPE_DEL',
} as const;

export type EditFavoritesActionType =
  | 'EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED'
  | 0
  | 'EDIT_FAVORITES_ACTION_TYPE_ADD'
  | 1
  | 'EDIT_FAVORITES_ACTION_TYPE_DEL'
  | 2

export type EditFavoritesActionType__Output = typeof EditFavoritesActionType[keyof typeof EditFavoritesActionType]

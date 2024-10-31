// Original file: investAPI/src/docs/contracts/operations.proto

export const OperationType = {
  OPERATION_TYPE_UNSPECIFIED: 'OPERATION_TYPE_UNSPECIFIED',
  OPERATION_TYPE_INPUT: 'OPERATION_TYPE_INPUT',
  OPERATION_TYPE_BOND_TAX: 'OPERATION_TYPE_BOND_TAX',
  OPERATION_TYPE_OUTPUT_SECURITIES: 'OPERATION_TYPE_OUTPUT_SECURITIES',
  OPERATION_TYPE_OVERNIGHT: 'OPERATION_TYPE_OVERNIGHT',
  OPERATION_TYPE_TAX: 'OPERATION_TYPE_TAX',
  OPERATION_TYPE_BOND_REPAYMENT_FULL: 'OPERATION_TYPE_BOND_REPAYMENT_FULL',
  OPERATION_TYPE_SELL_CARD: 'OPERATION_TYPE_SELL_CARD',
  OPERATION_TYPE_DIVIDEND_TAX: 'OPERATION_TYPE_DIVIDEND_TAX',
  OPERATION_TYPE_OUTPUT: 'OPERATION_TYPE_OUTPUT',
  OPERATION_TYPE_BOND_REPAYMENT: 'OPERATION_TYPE_BOND_REPAYMENT',
  OPERATION_TYPE_TAX_CORRECTION: 'OPERATION_TYPE_TAX_CORRECTION',
  OPERATION_TYPE_SERVICE_FEE: 'OPERATION_TYPE_SERVICE_FEE',
  OPERATION_TYPE_BENEFIT_TAX: 'OPERATION_TYPE_BENEFIT_TAX',
  OPERATION_TYPE_MARGIN_FEE: 'OPERATION_TYPE_MARGIN_FEE',
  OPERATION_TYPE_BUY: 'OPERATION_TYPE_BUY',
  OPERATION_TYPE_BUY_CARD: 'OPERATION_TYPE_BUY_CARD',
  OPERATION_TYPE_INPUT_SECURITIES: 'OPERATION_TYPE_INPUT_SECURITIES',
  OPERATION_TYPE_SELL_MARGIN: 'OPERATION_TYPE_SELL_MARGIN',
  OPERATION_TYPE_BROKER_FEE: 'OPERATION_TYPE_BROKER_FEE',
  OPERATION_TYPE_BUY_MARGIN: 'OPERATION_TYPE_BUY_MARGIN',
  OPERATION_TYPE_DIVIDEND: 'OPERATION_TYPE_DIVIDEND',
  OPERATION_TYPE_SELL: 'OPERATION_TYPE_SELL',
  OPERATION_TYPE_COUPON: 'OPERATION_TYPE_COUPON',
  OPERATION_TYPE_SUCCESS_FEE: 'OPERATION_TYPE_SUCCESS_FEE',
  OPERATION_TYPE_DIVIDEND_TRANSFER: 'OPERATION_TYPE_DIVIDEND_TRANSFER',
  OPERATION_TYPE_ACCRUING_VARMARGIN: 'OPERATION_TYPE_ACCRUING_VARMARGIN',
  OPERATION_TYPE_WRITING_OFF_VARMARGIN: 'OPERATION_TYPE_WRITING_OFF_VARMARGIN',
  OPERATION_TYPE_DELIVERY_BUY: 'OPERATION_TYPE_DELIVERY_BUY',
  OPERATION_TYPE_DELIVERY_SELL: 'OPERATION_TYPE_DELIVERY_SELL',
  OPERATION_TYPE_TRACK_MFEE: 'OPERATION_TYPE_TRACK_MFEE',
  OPERATION_TYPE_TRACK_PFEE: 'OPERATION_TYPE_TRACK_PFEE',
  OPERATION_TYPE_TAX_PROGRESSIVE: 'OPERATION_TYPE_TAX_PROGRESSIVE',
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE: 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE',
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE: 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE',
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE: 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE',
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE: 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE',
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE: 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE',
  OPERATION_TYPE_TAX_REPO: 'OPERATION_TYPE_TAX_REPO',
  OPERATION_TYPE_TAX_REPO_HOLD: 'OPERATION_TYPE_TAX_REPO_HOLD',
  OPERATION_TYPE_TAX_REPO_REFUND: 'OPERATION_TYPE_TAX_REPO_REFUND',
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE: 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE',
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE: 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE',
  OPERATION_TYPE_DIV_EXT: 'OPERATION_TYPE_DIV_EXT',
  OPERATION_TYPE_TAX_CORRECTION_COUPON: 'OPERATION_TYPE_TAX_CORRECTION_COUPON',
  OPERATION_TYPE_CASH_FEE: 'OPERATION_TYPE_CASH_FEE',
  OPERATION_TYPE_OUT_FEE: 'OPERATION_TYPE_OUT_FEE',
  OPERATION_TYPE_OUT_STAMP_DUTY: 'OPERATION_TYPE_OUT_STAMP_DUTY',
  OPERATION_TYPE_OUTPUT_SWIFT: 'OPERATION_TYPE_OUTPUT_SWIFT',
  OPERATION_TYPE_INPUT_SWIFT: 'OPERATION_TYPE_INPUT_SWIFT',
  OPERATION_TYPE_OUTPUT_ACQUIRING: 'OPERATION_TYPE_OUTPUT_ACQUIRING',
  OPERATION_TYPE_INPUT_ACQUIRING: 'OPERATION_TYPE_INPUT_ACQUIRING',
  OPERATION_TYPE_OUTPUT_PENALTY: 'OPERATION_TYPE_OUTPUT_PENALTY',
  OPERATION_TYPE_ADVICE_FEE: 'OPERATION_TYPE_ADVICE_FEE',
  OPERATION_TYPE_TRANS_IIS_BS: 'OPERATION_TYPE_TRANS_IIS_BS',
  OPERATION_TYPE_TRANS_BS_BS: 'OPERATION_TYPE_TRANS_BS_BS',
  OPERATION_TYPE_OUT_MULTI: 'OPERATION_TYPE_OUT_MULTI',
  OPERATION_TYPE_INP_MULTI: 'OPERATION_TYPE_INP_MULTI',
  OPERATION_TYPE_OVER_PLACEMENT: 'OPERATION_TYPE_OVER_PLACEMENT',
  OPERATION_TYPE_OVER_COM: 'OPERATION_TYPE_OVER_COM',
  OPERATION_TYPE_OVER_INCOME: 'OPERATION_TYPE_OVER_INCOME',
  OPERATION_TYPE_OPTION_EXPIRATION: 'OPERATION_TYPE_OPTION_EXPIRATION',
  OPERATION_TYPE_FUTURE_EXPIRATION: 'OPERATION_TYPE_FUTURE_EXPIRATION',
} as const;

export type OperationType =
  | 'OPERATION_TYPE_UNSPECIFIED'
  | 0
  | 'OPERATION_TYPE_INPUT'
  | 1
  | 'OPERATION_TYPE_BOND_TAX'
  | 2
  | 'OPERATION_TYPE_OUTPUT_SECURITIES'
  | 3
  | 'OPERATION_TYPE_OVERNIGHT'
  | 4
  | 'OPERATION_TYPE_TAX'
  | 5
  | 'OPERATION_TYPE_BOND_REPAYMENT_FULL'
  | 6
  | 'OPERATION_TYPE_SELL_CARD'
  | 7
  | 'OPERATION_TYPE_DIVIDEND_TAX'
  | 8
  | 'OPERATION_TYPE_OUTPUT'
  | 9
  | 'OPERATION_TYPE_BOND_REPAYMENT'
  | 10
  | 'OPERATION_TYPE_TAX_CORRECTION'
  | 11
  | 'OPERATION_TYPE_SERVICE_FEE'
  | 12
  | 'OPERATION_TYPE_BENEFIT_TAX'
  | 13
  | 'OPERATION_TYPE_MARGIN_FEE'
  | 14
  | 'OPERATION_TYPE_BUY'
  | 15
  | 'OPERATION_TYPE_BUY_CARD'
  | 16
  | 'OPERATION_TYPE_INPUT_SECURITIES'
  | 17
  | 'OPERATION_TYPE_SELL_MARGIN'
  | 18
  | 'OPERATION_TYPE_BROKER_FEE'
  | 19
  | 'OPERATION_TYPE_BUY_MARGIN'
  | 20
  | 'OPERATION_TYPE_DIVIDEND'
  | 21
  | 'OPERATION_TYPE_SELL'
  | 22
  | 'OPERATION_TYPE_COUPON'
  | 23
  | 'OPERATION_TYPE_SUCCESS_FEE'
  | 24
  | 'OPERATION_TYPE_DIVIDEND_TRANSFER'
  | 25
  | 'OPERATION_TYPE_ACCRUING_VARMARGIN'
  | 26
  | 'OPERATION_TYPE_WRITING_OFF_VARMARGIN'
  | 27
  | 'OPERATION_TYPE_DELIVERY_BUY'
  | 28
  | 'OPERATION_TYPE_DELIVERY_SELL'
  | 29
  | 'OPERATION_TYPE_TRACK_MFEE'
  | 30
  | 'OPERATION_TYPE_TRACK_PFEE'
  | 31
  | 'OPERATION_TYPE_TAX_PROGRESSIVE'
  | 32
  | 'OPERATION_TYPE_BOND_TAX_PROGRESSIVE'
  | 33
  | 'OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE'
  | 34
  | 'OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE'
  | 35
  | 'OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE'
  | 36
  | 'OPERATION_TYPE_TAX_REPO_PROGRESSIVE'
  | 37
  | 'OPERATION_TYPE_TAX_REPO'
  | 38
  | 'OPERATION_TYPE_TAX_REPO_HOLD'
  | 39
  | 'OPERATION_TYPE_TAX_REPO_REFUND'
  | 40
  | 'OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE'
  | 41
  | 'OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE'
  | 42
  | 'OPERATION_TYPE_DIV_EXT'
  | 43
  | 'OPERATION_TYPE_TAX_CORRECTION_COUPON'
  | 44
  | 'OPERATION_TYPE_CASH_FEE'
  | 45
  | 'OPERATION_TYPE_OUT_FEE'
  | 46
  | 'OPERATION_TYPE_OUT_STAMP_DUTY'
  | 47
  | 'OPERATION_TYPE_OUTPUT_SWIFT'
  | 50
  | 'OPERATION_TYPE_INPUT_SWIFT'
  | 51
  | 'OPERATION_TYPE_OUTPUT_ACQUIRING'
  | 53
  | 'OPERATION_TYPE_INPUT_ACQUIRING'
  | 54
  | 'OPERATION_TYPE_OUTPUT_PENALTY'
  | 55
  | 'OPERATION_TYPE_ADVICE_FEE'
  | 56
  | 'OPERATION_TYPE_TRANS_IIS_BS'
  | 57
  | 'OPERATION_TYPE_TRANS_BS_BS'
  | 58
  | 'OPERATION_TYPE_OUT_MULTI'
  | 59
  | 'OPERATION_TYPE_INP_MULTI'
  | 60
  | 'OPERATION_TYPE_OVER_PLACEMENT'
  | 61
  | 'OPERATION_TYPE_OVER_COM'
  | 62
  | 'OPERATION_TYPE_OVER_INCOME'
  | 63
  | 'OPERATION_TYPE_OPTION_EXPIRATION'
  | 64
  | 'OPERATION_TYPE_FUTURE_EXPIRATION'
  | 65

export type OperationType__Output = typeof OperationType[keyof typeof OperationType]

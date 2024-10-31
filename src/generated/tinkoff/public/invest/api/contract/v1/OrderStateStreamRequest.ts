// Original file: investAPI/src/docs/contracts/orders.proto


export interface OrderStateStreamRequest {
  'accounts'?: (string)[];
  'pingDelayMs'?: (number);
  '_pingDelayMs'?: "pingDelayMs";
}

export interface OrderStateStreamRequest__Output {
  'accounts': (string)[];
  'pingDelayMs'?: (number);
  '_pingDelayMs': "pingDelayMs";
}

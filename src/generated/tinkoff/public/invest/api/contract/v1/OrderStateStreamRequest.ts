// Original file: investAPI/src/docs/contracts/orders.proto


export interface OrderStateStreamRequest {
  'accounts'?: (string)[];
  'pingDelayMillis'?: (number);
  '_pingDelayMillis'?: "pingDelayMillis";
}

export interface OrderStateStreamRequest__Output {
  'accounts': (string)[];
  'pingDelayMillis'?: (number);
  '_pingDelayMillis': "pingDelayMillis";
}

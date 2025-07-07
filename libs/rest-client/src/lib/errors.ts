import { BaseError } from '@t-tech/invest-shared';

export class EmptyURLError extends BaseError {
  override code = 'EmptyURL';
}

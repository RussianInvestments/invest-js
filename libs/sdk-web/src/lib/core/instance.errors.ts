import { BaseError } from '@t-tech/invest-shared';

export class EmptyTokenError extends BaseError {
  override code = 'EmptyToken';
}

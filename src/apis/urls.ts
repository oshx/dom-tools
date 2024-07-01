import { REGEXP_VALID_PATH, REGEXP_VALID_URI } from '../core/regexps';

export function validURL(value: any): value is SourceString {
  if (typeof value !== 'string') {
    return false;
  }
  return REGEXP_VALID_URI.test(value) || REGEXP_VALID_PATH.test(value);
}

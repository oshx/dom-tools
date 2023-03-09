import { REGEXP_SPACE } from '@/core';

export function shrinkStyle(style: string): string {
  return style.replace(REGEXP_SPACE, '');
}

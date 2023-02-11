import { dep3 } from '@script-test/dep3';

export function script2(): string {
  console.log(dep3());
  return 'script2';
}

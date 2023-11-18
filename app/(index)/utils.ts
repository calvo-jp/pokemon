import {clamp} from '@/utils/clamp';
import {Output, array, nullable, object, string, transform} from 'valibot';

export const PaginationSchema = object({
  page: transform(nullable(string(), '1'), (value) => {
    if (!value) return 20;
    const parsed = parseInt(value);
    return Number.isNaN(parsed)
      ? 20
      : clamp(parsed, 1, Number.MAX_SAFE_INTEGER);
  }),
  size: transform(nullable(string(), '20'), (value) => {
    if (!value) return 20;
    const parsed = parseInt(value);
    return Number.isNaN(parsed) ? 20 : clamp(parsed, 20, 100);
  }),
});

export const FilterSchema = object({
  search: nullable(string(), ''),
  types: nullable(array(string()), []),
});

export type TPaginationSchema = Output<typeof PaginationSchema>;
export type TFilterSchema = Output<typeof FilterSchema>;

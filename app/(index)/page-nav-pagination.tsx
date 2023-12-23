'use client';

import {IconChevronLeft, IconChevronRight} from '@/components/icons';
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
} from '@/components/pagination';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {Fragment} from 'react';

interface PageNavPaginationProps {
  page: number;
  size: number;
  count: number;
}

export function PageNavPagination({page, size, count}: PageNavPaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Pagination
      mt={{
        base: 4,
        lg: 12,
      }}
      /* @ts-expect-error */
      page={page}
      pageSize={size}
      count={count}
      onPageChange={(o) => {
        const s = new URLSearchParams(searchParams);

        s.set('page', `${o.page}`);
        s.set('size', `${o.pageSize}`);

        router.push(`${pathname}?${s.toString()}`);
      }}
    >
      {(ctx) => (
        <Fragment>
          <PaginationPrevTrigger>
            <IconChevronLeft w={5} h={5} />
          </PaginationPrevTrigger>

          {ctx.pages.map((page, index) => {
            if (page.type === 'page') {
              return (
                <PaginationItem
                  key={index}
                  display={{
                    base: 'none',
                    lg: 'flex',
                  }}
                  {...page}
                >
                  {page.value}
                </PaginationItem>
              );
            }

            return (
              <PaginationEllipsis
                key={index}
                index={index}
                display={{
                  base: 'none',
                  lg: 'flex',
                }}
              >
                ...
              </PaginationEllipsis>
            );
          })}

          <PaginationNextTrigger>
            <IconChevronRight w={5} h={5} />
          </PaginationNextTrigger>
        </Fragment>
      )}
    </Pagination>
  );
}
